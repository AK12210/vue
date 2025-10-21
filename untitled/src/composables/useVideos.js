import { ref, computed, onMounted} from "vue";

export default function useVideos() {
  const videos = ref([]);
  const loading = ref(true);
  const totalLikes = ref(0);
  const searchQuery = ref("");

  onMounted(() => {
    setTimeout(() => {
      videos.value = [
        {
          id: 1,
          title: "Special Video 1",
          channel: "Channel 1",
          views: 1823013,
          thumbnail: "",
        },
        {
          id: 2,
          title: "Another Video 2",
          channel: "Channel 2",
          views: 201934,
          thumbnail: "",
        },
        {
          id: 3,
          title: "Video 3",
          channel: "Channel 3",
          views: 1187401,
          thumbnail: "",
        },
      ];
      loading.value = false;
    }, 1000);
  });

  const filteredVideos = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return videos.value.filter(
      (v) =>
        v.title.toLowerCase().includes(query) ||
        v.channel.toLowerCase().includes(query)
    );
  });

  const addLike = () => {
    totalLikes.value++;
  }
  return {
    videos,
    loading,
    totalLikes,
    searchQuery,
    filteredVideos,
    addLike,
  };
}
