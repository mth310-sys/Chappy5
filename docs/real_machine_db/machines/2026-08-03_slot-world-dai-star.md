# No.1815 スロット ワールドダイスター

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: スロット ワールドダイスター
manufacturer: パオン・ディーピー（大都技研グループ）
formalModel: L／ワールドダイスター／PA3
inspectionNumber: 6S0003
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / ST＋疑似ボーナス
payoutRateBySetting: 設定1 97.8% / 2 98.8% / 3 101.1% / 4 104.0% / 5 107.0% / 6 112.4%
initialHitBySetting:
- CZ: 1/180.6 / 1/173.8 / 1/168.3 / 1/164.9 / 1/163.0 / 1/156.0
- ボーナス(ST)初当り: 1/306.5 / 1/297.1 / 1/284.1 / 1/262.1 / 1/257.1 / 1/246.6
baseGamesPer50: 約30G/50枚
netIncrease: 疑似ボーナス 約8.0枚/G
basicPayout:
- ワナビスタボーナス: 100枚（払い出し）
- ELECTRIC PRINCESSボーナス: 100枚（払い出し）
- Actor Episode: 100枚 or 200枚（払い出し）
- (ワールド)ダイスターボーナス: 150枚以上（払い出し）
- 最上位ST中ボーナス: 1000枚以上（払い出し）
- 基本ST DaiStarShowTime: 10G+α、継続率約50%

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 設定変更で有利区間リセット。
- 天井G数をリセットし、通常999G+αから600G+αへ短縮。
- 内部状態をリセット。
- CZポイント初期値を優遇し、「努力の欠片」初期ポイントを抽選。
- 設定変更後は約60%でいずれかのラッキーモードへ移行。
carryOverBehavior:
- 据え置きでは前日状態を引き継ぐものとして二次解析で支持されるが、設定変更/据え置き/純電断を同一表で直接比較する高優先資料は未固定。SECONDARY_SUPPORTED。
powerCycleBehavior:
- 設定変更なしの電源OFF→ONでは天井G数・内部状態を引き継ぐとする機種固有二次解析を確認。SECONDARY_SUPPORTED。
- ラッキーモード/CZポイント/努力の欠片/有利区間の純電断個別直接表記は十分な再探索後も未固定。
gameCounterReset:
- 設定変更: RESET。
- 据え置き: CARRY_OVER（SECONDARY_SUPPORTED）。
- 電源OFF→ONのみ: CARRY_OVER（SECONDARY_SUPPORTED）。
ceilingAfterReset:
- 通常: 999G+αでボーナス。
- 設定変更後: 600G+αでボーナス。
- 600G天井到達時はオペラ変換アイテム獲得濃厚＋STゲーム数加算アイテム抽選。
- 上位ST終了後・ノスタルジアモード滞在時も600G+αだが、設定変更恩恵とは別契機として分離。
modeAfterReset:
- 設定変更後は約60%でラッキーモード。
- ノスタルジア/しりうす湯/センスの3モードは均等振り分けと解析。ワールドダイスターモードを含む4種全体の詳細率は未公開。
stateAfterReset:
- 設定変更: RESET（二次解析）。
- 純電断: CARRY_OVER（二次解析）。
- 低確/高確の具体的な朝一振り分けは未確認。
advantageousSectionReset:
- 設定変更時にRESET。
- 通常営業中はエンディング発生時、最上位ST「World Dai Star Show Time超」終了時にもリセット契機あり。これらは朝一設定変更恩恵と混同しない。
- 純電断時の有利区間直接表記: UNVERIFIED_AFTER_RESEARCH。
resetBenefits:
- 天井600G+αへ短縮。
- 約60%でラッキーモード。
- CZポイント初期値優遇。
- 努力の欠片初期ポイント抽選。
- 100G到達時のフタリノスタルジア成功率 約25%。
- 600G天井到達時にオペラ変換濃厚＋STゲーム数加算アイテム抽選。
resetPenalties: 公開された明確な設定変更固有不利要素は今回確認できず。
resetDetection:
- 600G+α天井、100G前兆、ラッキーモード示唆等は事後推測材料になり得る。
- ただし600G短縮は上位ST後・ノスタルジアモードでも発生するため、短縮挙動単独で設定変更確定とはしない。
- 本機固有ガックン条件/発生率、朝一即時ランプ判別は検索語を変えて再探索したが未確認。UNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 通常天井: 999G+α
- 設定変更後天井: 600G+α
- 設定変更後ラッキーモード滞在率: 約60%
- 設定変更後100Gフタリノスタルジア成功率: 約25%
- ラッキーモード: ノスタルジア / しりうす湯 / センス / ワールドダイスター
- ノスタルジア / しりうす湯 / センスの3種: 均等振り分け（解析）

## QA notes
- メーカー表記は業界一次・HAZUSEに従い「パオン・ディーピー」。大都技研表記のみの二次資料はグループ/販売文脈として扱う。
- 型式名・検定番号はHAZUSEと業界検定通過資料で照合。
- 600G短縮は設定変更以外にも上位ST終了後・ノスタルジアモードで発生するため、朝一変更判別ロジックでは単独確定条件にしない。
- 有利区間リセット後のI Wanna/上位ST系恩恵は通常営業中切断契機を含み、設定変更朝一恩恵と同一視しない。

## sources
- HAZUSE（型式、検定番号、導入日、設定別CZ/初当り、機械割、ベース、通常仕様）: https://hazuse.com/machine/pachislot/6S0003/
- 遊技通信 / P-WORLD（業界一次、型式、メーカー、純増、ST基本性能、導入時期）: https://news.p-world.co.jp/articles/33912/yugitsushin
- パチビー（基本獲得枚数、純増、導入日）: https://www.pachibee.jp/machines/index/226060013
- 6確（天井、リセット天井、朝一ラッキーモード/CZポイント/100G数値）: https://www.kaku6.jp/slot/wds/
- スロベース（設定変更/電源OFF→ON比較、天井、内部状態、有利区間、朝一数値）: https://slobase.jp/machines/world-dai-star
- ジャグラーズネット（設定変更後600G、100G約25%、約60%ラッキーモード、CZ/努力の欠片、有利区間）: https://jugglersnet.com/chumoku/world-dai-star
- 情報島＋（メーカー、導入日、純増、ST概要）: https://p-johojima.jp/machine_spec/post-34877/
- 遊技日本検定通過報道（型式照合）: https://www.chiba-tv.com/plus/detail/2026041541308
- ワンチャンくん（複数媒体照合、据え置き/0G期待値未確認の注意）: https://wanchankun.com/machines/world-dai-star

confidence:
- core: ANALYSIS_HIGH / INDUSTRY
- formalModelInspection: ANALYSIS_HIGH + INDUSTRY
- resetCeilingAndNumericBenefits: ANALYSIS_HIGH
- powerCycle: ANALYSIS_SINGLE_TO_SECONDARY_SUPPORTED
- carryOver: SECONDARY_SUPPORTED
- advantageousSectionPowerCycle: UNVERIFIED
- resetDetectionImmediate: UNVERIFIED

missingFields:
- 純電断時のラッキーモード/CZポイント/努力の欠片/有利区間の直接契約
- 据え置き三者比較の高優先直接表
- 本機固有ガックン条件/発生率
- 朝一0G専用の信頼できる金額期待値

conflicts: []
