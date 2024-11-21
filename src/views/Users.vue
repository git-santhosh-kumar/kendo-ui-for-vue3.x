<template>
  <section style="padding: 0 10px;">
    <h1>List of User</h1>

    <kendo-grid
        ref="userGrid"
        style="min-height: 250px; max-height: 600px"
        :data-items="gridData"
        :columns="userColumns"
        :resizable="true"
        :reorderable="true"
        @columnreorder="columnReorder"
        :skip="skip"
        :take="take"
        :sortable="true"
        :sort= "sort"
        :filter="filter"
        @datastatechange="dataStateChange"
        :pageable="true"
        :column-menu="true"
        :column-menu-icon="starIcon"
        @filterchange="filterChange"
        @sortchange="sortChange"
    ></kendo-grid>
  </section>
</template>

<script>
import { process } from '@progress/kendo-data-query';
import { filterGroupByField, sortGroupByField } from '@progress/kendo-vue-grid';
import { starIcon } from '@progress/kendo-svg-icons';

export default {
    name: "Users",
    data() {
        return {
            gridData: [],
            users: [],
            userColumns: [
                { field: "id", title: "ID", width: 50, locked: true, sortable: false, columnMenu: false },
                { field: "name", title: "Name", width: 200 },
                { field: "username", title: "User Name", width: 150 },
                { field: "email", title: "Email", width: 150 },
                { field: "address", title: "Address", width: 250 },
                { field: "phone", title: "Phone", width: 150 },
                { field: "website", title: "Website", width: 150 },
                { field: "company", title: "Company", width: 150 }
            ],
            sort: [],
            skip: 0,
            take: 5,
            filter: null,
            starIcon
        }
    },
    watch: {
        
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        dataStateChange(event) {
            const dataState = event.data;
            this.take = dataState.take;
            this.skip = dataState.skip;
            this.sort = dataState.sort;
            this.filter = dataState.filter;
            loadGridData(this.users)
        },
        loadGridData(payload) {
            this.gridData = process(payload, {
                take: this.take,
                skip: this.skip,
                sort: this.sort,
                filter: this.filter
            });
        },
        async getUsers() {
            this.users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.error("Post Error: ", err.message))
        
            this.loadGridData(this.users);
        },
        columnReorder(options) {
            console.log(options)
            this.userColumns = options.columns
        },
        sortChange(event) {
            console.log("sort change event: ", event)
            let isColumnActive = sortGroupByField(event.event.field, event.sort);
            console.log("isColumnActive: ", isColumnActive)
            
            // @ts-ignore
            this.userColumns.find(function (column) {
            return column.field === event.event.field;
            }).headerClassName = isColumnActive ? 'active' : '';
    
            this.sort = event.sort;
            this.loadGridData();
        },
        filterChange(event) {
            let isColumnActive = filterGroupByField(event.event.field, event.filter);
            // @ts-ignore
            let changedColumn = this.userColumns.find(function (column) {
                return column.field === event.event.field;
            });
    
            if (changedColumn) {
                changedColumn.headerClassName = isColumnActive ? 'active' : '';
            }
    
            this.filter = event.filter;
            this.loadGridData();
        },
    }
}
</script>

<style>

</style>