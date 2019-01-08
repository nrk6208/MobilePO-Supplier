export const PurchaseOrderHelpers = {
  purchaseOrderHeader : [
        {
            name: 'Order Number',
            key: 'OrderNumber',
            order: 'asc'
        },
        {
            name: 'Order Date',
            key: 'Date',
            order: 'asc'
        },
        {
            name: 'Ordered Quantity',
            key: 'Quantity',
            order: 'asc'
        },
        {
            name: 'Action',
            key: 'action',
            order: 'asc'
        }
    ],
    rows : [{
        OrderNumber: 'PRO000001',
        Date: new Date(new Date().setDate(-1)),
        Quantity: 10,
        lines: [{
            OrderLineNumber: 10,
            Quantity: 10,
            Date: new Date(new Date().setDate(-1)),
            Item: 'ITM000001'
        }]
    }, {
        OrderNumber: 'PRO000002',
        Date: new Date(new Date().setDate(-2)),
        Quantity: 20,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000003',
        Date: new Date(new Date().setDate(-3)),
        Quantity: 30,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000004',
        Date: new Date(new Date().setDate(-4)),
        Quantity: 40,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000005',
        Date: new Date(new Date().setDate(-5)),
        Quantity: 50,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000006',
        Date: new Date(new Date().setDate(-6)),
        Quantity: 60,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000007',
        Date: new Date(new Date().setDate(-7)),
        Quantity: 70,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000008',
        Date: new Date(new Date().setDate(-8)),
        Quantity: 80,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000009',
        Date: new Date(new Date().setDate(-9)),
        Quantity: 90,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000010',
        Date: new Date(new Date().setDate(-10)),
        Quantity: 100,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000011',
        Date: new Date(new Date().setDate(-11)),
        Quantity: 110,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000012',
        Date: new Date(new Date().setDate(-12)),
        Quantity: 120,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000013',
        Date: new Date(new Date().setDate(-13)),
        Quantity: 130,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000014',
        Date: new Date(new Date().setDate(-14)),
        Quantity: 140,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000015',
        Date: new Date(new Date().setDate(-15)),
        Quantity: 150,
        lines: [{}]
    }, {
        OrderNumber: 'PRO000016',
        Date: new Date(new Date().setDate(-16)),
        Quantity: 160,
        lines: [{}]
    }]
};

/** Constants used to fill up our data base. */
