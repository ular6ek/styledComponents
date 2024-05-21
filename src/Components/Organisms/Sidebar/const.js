import AnalyticsIcon from "../../../Assets/Icons/AnalyticsIcon";
import CustomersIcon from "../../../Assets/Icons/CustomersIcon";
import DashboardIcon from "../../../Assets/Icons/DashboardIcon";
import DiscountIcon from "../../../Assets/Icons/DiscountIcon";
import Get_HelpIcon from "../../../Assets/Icons/Get_HelpIcon";
import IntegrationsIcon from "../../../Assets/Icons/IntegrationsIcon";
import MarketingIcon from "../../../Assets/Icons/MarketingIcon";
import My_storeIcon from "../../../Assets/Icons/My_storeIcon";
import OrdersIcon from "../../../Assets/Icons/OrdersIcon";
import ProductsIcon from "../../../Assets/Icons/ProductsIcon";
import SettingsIcon from "../../../Assets/Icons/SettingsIcon";
import Orders from "../../Pages/Orders/Orders";

export const MAIN_LIST = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    to:'/',
    icon : DashboardIcon
  },
  {
    id: 'orders',
    label: 'Orders',
    to:'/orders',

    icon : OrdersIcon

  },
  {
    id: 'products',
    label: 'Products',
    to:'/products',

    icon : ProductsIcon

  },
  {
    id: 'customers',
    label: 'Customers',
    to:'/customers',

    icon : CustomersIcon

  },
  {
    id: 'analytics',
    label: 'Analytics',
    to:'/analytics',

    icon : AnalyticsIcon

  },
  {
    id: 'marketing',
    label: 'Marketing',
    to:'/marketing',
    icon : MarketingIcon

  },
]

export const SALES_LIST = [
  {
    id: 'integrations',
    label: 'Integrations',
    to:'/integrations',

    icon : IntegrationsIcon
  },
  {
    id: 'my_store',
    label: 'My store',
    to:'/my_store',
    
    icon : My_storeIcon

  },
  {
    id: 'discounts',
    label: 'Discounts',
    to:'/discounts',

    icon : DiscountIcon

  },
]


export const OTHER_LIST = [
  {
    id: 'settings',
    label: 'Settings',
    to:'/settings',
    
    icon : SettingsIcon
  },
  {
    id: 'get_help',
    label: 'Get Help',
    to:'/get_help',

    icon : Get_HelpIcon

  },
 
]
  