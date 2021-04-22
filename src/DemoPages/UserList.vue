<template>
  <b-container fluid>
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
          variant="info"
        >
          Edit
        </b-button>
        <b-button variant="danger" size="sm" @click="row.toggleDetails">
          Delete
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row
      ><b-col sm="5" md="3" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="3" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
        {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
        {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
        {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
          {
          isActive: true,
          email: "mcdonal@mail.com",
          name: { first: "Dickerson", last: "Macdonald" },
        },
      ],
      fields: [
        {
          key: "name",
          label: "Person full name",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
