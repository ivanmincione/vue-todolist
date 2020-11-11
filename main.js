// 1-definire una lista di todo e stamparli in pagina in un elenco

// 2-predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo

// 3-al click su un item della lista, il todo viene rimosso

// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue (
    {
        el: '#root',
        data: {
            items: ['latte', 'pane', 'carne', 'pasta', 'acqua', 'verdura'],
            item: '',
            isModificate: false,
            selectIndex: null,

        },

        methods: {
            // aggiungo gli item all'array
            addItem() {
                this.items.push(this.item);
                this.item = '';
            },

            // funzione per selezionare un item da modificare
            editItem(index, item) {
                this.item = item ;
                this.selectIndex = index;
                this.isModificate = true;
            },

            // funzione per aggiungere alla lista l'item MODIFICATO
            modificItem() {
                this.items.splice(this.selectIndex, 1, this.item)
                this.isModificate = false
            },

            // funzione per rimuovere un item cliccando sul button
            removeItem (index) {
                this.items.splice( index, 1 );
            },

        },




    //end Vue
    }
);
