<script>
export default {
  name: 'examiner-summary',
  data() {
    return {
      examiners: [],
      maxTotal: 0,
      minTotal: 0,
      averageTotal: 0,
      loading: true,
      error: null,
    };
  },
  methods: {
    totalScore(examiner) {
      return (
          examiner.languageScore +
          examiner.orientationScore +
          examiner.registrationScore +
          examiner.attentionAndCalculationScore
      );
    },
    calculateStats() {
      if (!this.examiners.length) {
        this.maxTotal = 0;
        this.minTotal = 0;
        this.averageTotal = 0;
        return;
      }

      const totalScores = this.examiners.map(ex => this.totalScore(ex));

      this.maxTotal = Math.max(...totalScores);
      this.minTotal = Math.min(...totalScores);

      // Usando reduce (original)
      // const sum = totalScores.reduce((acc, val) => acc + val, 0);

      // Usando forEach para sumar totalScores
      let sum = 0;
      totalScores.forEach(val => {
        sum += val;
      });

      this.averageTotal = (sum / totalScores.length).toFixed(2);
    },
    loadExaminers() {
      this.loading = true;
      this.error = null;
      //examinerService= new ExaminerService()
      this.examinerService.getAll()
          .then(response => {
            this.examiners = response.data;
            this.calculateStats();
          })
          .catch(err => {
            this.error = 'Error loading examiners';
            console.error(err);
          })
          .finally(() => {
            this.loading = false;
          });
    }
  },
  created() {
    this.loadExaminers();
  }
};
</script>

<template>
  <pv-card class="examiner-summary-card w-full" style="min-height: 150px;">
    <template #header>
      <div class="card-header">
        <h3>Examiner Scores Summary</h3>
      </div>
    </template>

    <template #content>
      <div class="summary-content p-3">
        <div v-if="loading">Loading examiners...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
          <p><strong>Maximum Total Score:</strong> {{ maxTotal }}</p>
          <p><strong>Minimum Total Score:</strong> {{ minTotal }}</p>
          <p><strong>Average Total Score:</strong> {{ averageTotal }}</p>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.examiner-summary-card {
  background-color: white;
  color: black;
  margin: 1rem 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.summary-content {
  font-size: 1rem;
  color: #222;
  line-height: 1.4;
  padding: 0 1rem;
  flex-grow: 1;
}
</style>
