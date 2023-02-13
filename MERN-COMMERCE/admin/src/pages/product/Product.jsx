import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function Product() {
  const [pStats, setPStats] = useState([]);
//   const [inputs, setInputs] = useState({});
  const [descp,setDescp] = useState("")
  const [price,setPrice] = useState("")
  const [title,setTitle] = useState("")
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const location = useLocation();
  const dispatch = useDispatch();

  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state?.product?.products.find((product) => product?._id === productId)
  );
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateProducts = { categories: cat, size, color ,descp,price,title};
    updateProduct(updateProducts, dispatch);
    console.log(updateProducts.inputs, "updateProductsupdateProducts");
  };
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = userRequest.get("orders/income?pid=" + productId);
        const list = res?.data?.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (error) {}
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product?.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Title</label>
            <input
              type="text"
              placeholder={product?.title}
              onChange={(e)=>setTitle(e.target.value)}
             
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder={product?.desc}
              onChange={(e)=>setDescp(e.target.value)}
            />
            <label>Product Price</label>
            <input
              type="text"
              placeholder={product?.price}
              onChange={(e)=>setPrice(e.target.value)}
            />
            <div className="addProductItem">
              <label>Categories</label>
              <input
                type="text"
                placeholder="jeans,skirts"
                onChange={(e)=>setCat(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Colors</label>
              <input type="text" placeholder={product?.color} 
               onChange={(e)=>setColor(e.target.value)}
              />
              <label>Size</label>
              <input type="text" placeholder={product?.size}
               onChange={(e)=>setSize(e.target.value)}
              />
            </div>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product?.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
