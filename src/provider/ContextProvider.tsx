'use client';
import {
	ContextProviderProps,
	EmotionLabels,
	PlaylistItem,
	PlaylistTracksResponse,
	RepeatModeType,
	SpotifyRecommendationResponse,
	SpotifyTokenProps,
	SpotifyTrackProps,
	SpotifyUserArtistResponse,
	SpotifyUserInfoResponse,
	SpotifyUserPlayListResponse,
	SpotifyUserSavedTrackResponse,
	UserSettingProps,
	isFirstFetchCompleteProps,
	selectedContentsProps,
} from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [userInfo, setUserInfo] = useState<SpotifyUserInfoResponse | null>(
		null
	);
	const [spotifyToken, setSpotifyToken] = useState<SpotifyTokenProps | null>(
		null
	);

	const [userPlayList, setUserPlayList] =
		useState<SpotifyUserPlayListResponse | null>(null);
	const [userArtist, setUserArtist] =
		useState<SpotifyUserArtistResponse | null>(null);
	const [userSavedTrack, setUserSavedTrack] =
		useState<SpotifyUserSavedTrackResponse | null>(null);
	const [playListTrack, setPlayListTrack] =
		useState<PlaylistTracksResponse | null>(null);
	const [lastPlayedPlayList, setLastPlayedPlayList] =
		useState<PlaylistTracksResponse | null>(null);
	const [selectedContents, setSelectedContents] =
		useState<selectedContentsProps>({
			userSavedTrack: null,
			playList: null,
			artist: null,
			search: {
				query: null,
			},
		});
	const [currentContent, setCurrentContent] = useState<
		'userSavedTrack' | 'playList' | 'artist' | 'AI' | 'search' | null
	>(null);
	const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement | null>(
		null
	);
	const [playingContents, setPlayingContents] =
		useState<SpotifyTrackProps | null>(null);
	const [playingPlayList, setPlayingPlayList] = useState<PlaylistItem | null>(
		null
	);
	const [playingPlaylistIndex, setPlayingPlaylistIndex] = useState<number>(0);
	const [isPause, setIsPause] = useState<boolean | null>(null);
	const [trackValue, setTrackValue] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [isSeeking, setIsSeeking] = useState<boolean>(false);
	const [repeatMode, setRepeatMode] = useState<RepeatModeType>('default');

	const [isPlay, setIsPlay] = useState<boolean>(false);
	const [isSpeechModal, setIsSpeechModal] = useState<boolean>(false);
	const [isSettingModal, setIsSettingModal] = useState<boolean>(false);
	const [isFullScreen, setIsFullscreen] = useState<boolean>(false);
	const [selectedLeftContent, setSelectedLeftContent] = useState<
		| 'コレクション'
		| 'プロフィール'
		| 'プレイリスト'
		| 'AI'
		| 'アーティスト'
		| '検索'
		| null
	>('コレクション');
	const [selectedLastContent, setSelectedLastContent] = useState<
		| 'コレクション'
		| 'プロフィール'
		| 'プレイリスト'
		| 'AI'
		| 'アーティスト'
		| '検索'
		| null
	>('コレクション');
	const [isLeftDetail, setIsLeftDetail] = useState<boolean>(true);
	const [isFooter, setIsFooter] = useState<boolean>(true);
	const [isFirstFetchComplete, setIsFirstFetchComplete] =
		useState<isFirstFetchCompleteProps>({
			userSavedTrack: false,
			userPlayList: false,
			userArtist: false,
		});
	const [userSetting, setUserSetting] = useState<UserSettingProps>({
		background: 'dominant',
	});

	const [transcript, setTranscript] = useState<string>('');
	const [emotion, setEmotion] = useState<string>('');
	const [recommendationPlaylists, setRecommendationPlaylists] = useState<
		SpotifyRecommendationResponse[][]
	>([]);
	const [speechText, setSpeechText] = useState<string>('');
	const [voltage, setVoltage] = useState<EmotionLabels | null>(null);

	const contextValue = {
		userInfo,
		setUserInfo,
		spotifyToken,
		setSpotifyToken,

		userPlayList,
		setUserPlayList,
		userArtist,
		setUserArtist,
		userSavedTrack,
		setUserSavedTrack,
		playListTrack,
		setPlayListTrack,
		lastPlayedPlayList,
		setLastPlayedPlayList,
		selectedContents,
		setSelectedContents,
		currentContent,
		setCurrentContent,
		currentTrack,
		setCurrentTrack,
		playingContents,
		setPlayingContents,
		playingPlayList,
		setPlayingPlayList,
		playingPlaylistIndex,
		setPlayingPlaylistIndex,
		isPause,
		setIsPause,
		trackValue,
		setTrackValue,
		duration,
		setDuration,
		currentTime,
		setCurrentTime,
		isSeeking,
		setIsSeeking,
		repeatMode,
		setRepeatMode,

		isPlay,
		setIsPlay,
		isSpeechModal,
		setIsSpeechModal,
		isSettingModal,
		setIsSettingModal,
		isFullScreen,
		setIsFullscreen,
		selectedLeftContent,
		setSelectedLeftContent,
		selectedLastContent,
		setSelectedLastContent,
		isLeftDetail,
		setIsLeftDetail,
		isFooter,
		setIsFooter,
		isFirstFetchComplete,
		setIsFirstFetchComplete,
		userSetting,
		setUserSetting,

		transcript,
		setTranscript,
		emotion,
		setEmotion,
		recommendationPlaylists,
		setRecommendationPlaylists,
		speechText,
		setSpeechText,
		voltage,
		setVoltage,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
