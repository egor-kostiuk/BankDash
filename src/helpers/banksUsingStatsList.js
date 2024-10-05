import { auth } from '/src/services/api/firebase.js';
import { useCards } from '/src/services/cards/hooks/useCards.js';

export const BanksUsingStatsList = () => {
    const user = auth.currentUser;
    const { cards } = useCards(user?.uid);

    const bankCounts = cards.reduce((acc, card) => {
        const bank = card.cardBank;
        if (!acc[bank]) {
            acc[bank] = 0;
        }
        if (acc[bank] < 5) {
            acc[bank] += 1;
        }
        return acc;
    }, {});

    const bank = {
        DBL: bankCounts['DBL'] || 0,
        ABM: bankCounts['ABM'] || 0,
        MCP: bankCounts['MCP'] || 0,
        BRC: bankCounts['BRC'] || 0,
    };

    return { bank };
};