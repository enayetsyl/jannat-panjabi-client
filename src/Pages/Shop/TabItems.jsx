import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProducts from '../../hooks/useProducts';
import CardContainer from './CardContainer';
import Container from '../../SharedComponent/Container';

const TabItems = () => {
  const tabCategory = ['All', 'Popular', 'Patiala Suit', 'Phulkari Embroidery', 'Churidar Kurta', 'Turban', 'Punjabi Weeding Attiret'];
  const [products] = useProducts();
  const allPanjabi = products
  const popular = products.filter(product => product.category === 'popular')
  const patialaSuit = products.filter(product => product.category === 'Patiala Suit')
  const phulkariEmbroidery = products.filter(product => product.category === 'Phulkari Embroidery')
  const churidarKurta = products.filter(product => product.category === 'Churidar Kurta')
  const turban = products.filter(product => product.category === 'Turban')
  const punjabiWeddingAttire = products.filter(product => product.category === 'Punjabi Wedding Attire')

const tabDetails = [allPanjabi, popular, patialaSuit, phulkariEmbroidery, churidarKurta, turban, punjabiWeddingAttire]
  return (
    <div className='my-20'>
    <Container>
    <Tabs>
    <TabList>
      {
        tabCategory.map((item, idx) => <Tab key={idx}>{item}</Tab>)
      }
    </TabList>
      {
        tabDetails.map((tabDetail, idx) => <TabPanel key={idx}><CardContainer tabDetail={tabDetail}></CardContainer></TabPanel>)
      }

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </Container>
    </div>
  );
};

export default TabItems;