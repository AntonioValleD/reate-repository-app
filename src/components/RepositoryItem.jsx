import { View, Text, StyleSheet } from "react-native"

const RepositoryItem = ({ repository }) => {
  return (
    <View key={repository.id} style={styles.repoCard}>
      <Text style={styles.textTitle}>
        Id:
        <Text style={styles.textDescription}>
          {` ${repository.id}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Full name:
        <Text style={styles.textDescription}>
          {` ${repository.fullName}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Description:
        <Text style={styles.textDescription}>
          {` ${repository.descriprion}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Languaje:
        <Text style={styles.textDescription}>
          {` ${repository.language}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Forks count:
        <Text style={styles.textDescription}>
          {` ${repository.forksCount}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Stargazers count:
        <Text style={styles.textDescription}>
          {` ${repository.stargazersCount}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Rating average:
        <Text style={styles.textDescription}>
          {` ${repository.ratingAverage}`}
        </Text>
      </Text>

      <Text style={styles.textTitle}>
        Review count:
        <Text style={styles.textDescription}>
          {` ${repository.reviewCount}`}
        </Text>
      </Text>
      
      <Text style={styles.textTitle}>
        Owner avatar URL:
        <Text style={styles.textDescription}>
          {` ${repository.ownerAvatarUrl}`}
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  repoCard: {
    backgroundColor: "lightgrey",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 5,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  textDescription: {
    fontWeight: "normal",
  },
})

export default RepositoryItem
