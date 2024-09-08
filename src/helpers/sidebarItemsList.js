import { sidebarImgList } from "./sidebarImgList.js";

export const sidebarItemsList = [
  { img: sidebarImgList.dashboard, imgActive: sidebarImgList.dashboardActive, label: 'Dashboard', path: '/bankdash' },
  { img: sidebarImgList.transactions, imgActive: sidebarImgList.transactionsActive, label: 'Transactions', path: '/test' }, // TODO: add Transactions page path
  { img: sidebarImgList.account, imgActive: sidebarImgList.accountActive, label: 'Account', path: '/account' }, // TODO: add Account page path
  { img: sidebarImgList.investments, imgActive: sidebarImgList.investmentsActive, label: 'Investments', path: '/investments' }, // TODO: add Investments page path
  { img: sidebarImgList.creditCards, imgActive: sidebarImgList.creditCardsActive, label: 'Credit-Cards', path: '/credit-cards' },
  { img: sidebarImgList.loans, imgActive: sidebarImgList.loansActive, label: 'Loans', path: '/loans' }, // TODO: add Loans page path
  { img: sidebarImgList.services, imgActive: sidebarImgList.servicesActive, label: 'Services', path: '/services' }, // TODO: add Services page path
  { img: sidebarImgList.settings, imgActive: sidebarImgList.settingsActive, label: 'Settings', path: '/settings' }, // TODO: add Settings page path
]