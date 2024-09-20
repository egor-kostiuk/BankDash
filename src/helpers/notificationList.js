import { navSettingsDropdownImgList } from '/src/helpers/navSettingsDropdownImgList.js';
import { format } from 'date-fns-tz'; // TODO: delete test date

export const notificationList = [
  {
    img: navSettingsDropdownImgList.transactionMoney,
    title: "Transaction Successful",
    time: `${format(new Date('2024-08-29T02:51:00Z'), 'EEE MMM dd yyyy HH:mm')}`,
    isUnread: true,
  },
  {
    img: navSettingsDropdownImgList.lowBalanceAlert,
    title: "Low Balance Alert",
    time: `${format(new Date(), "EEE MMM dd yyyy HH:mm")}`,
    isUnread: true,
  },
  {
    img: navSettingsDropdownImgList.newLoanOffer,
    title: "New Loan Offer",
    time: `${format(new Date('2024-01-01T02:24:00Z'), 'EEE MMM dd yyyy HH:mm')}`,
    isUnread: false,
  },
]