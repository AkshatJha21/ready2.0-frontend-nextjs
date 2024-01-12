import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {

    const products = await getProducts({ isFeatured: true });
    const billboards = await getBillboards('8c7b764d-90af-4be7-ad6f-969c38d8132a');

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;