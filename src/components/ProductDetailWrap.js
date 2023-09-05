import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

export default withParams(ProductDetails);