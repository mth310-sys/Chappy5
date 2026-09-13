# 課長 熊田工作

recordNo: 1564
machineName: 課長 熊田工作
manufacturer: オーゼキ製造 / ネット販売
formalModel: S課長熊田工作GZA
inspectionCode: 230226
releaseDate: 2023-05-22
generation: 6.5号機 / メダルAT
systemType: AT / 疑似ボーナスループ型 / BIG・REG / 出世回胴システム
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.9%
- 設定4: 102.0%
- 設定5: 104.7%
- 設定6: 107.0%
- 設定L: 公開数値 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。設定L搭載およびデモ画面でタイトルパネル消灯は確認。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当り
- 設定1: 1/249
- 設定2: 1/241
- 設定4: 1/217
- 設定5: 1/201
- 設定6: 1/194
- 設定L: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.7G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 疑似ボーナス: 約3.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG: 70G、約210枚。
- REG: 30G、約90枚。
- ボーナス後は32Gの引き戻しゾーン「会議室」へ移行。
- 役職上昇でボーナスループ期待度が上昇し、会長は92%ループ。会長到達時の期待枚数は2000枚超と業界発表・解析で確認。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- ゲーム数天井: 通常時700G到達でボーナス。
- チェリー回数天井: 通常時チェリー30回成立でボーナス。
- 通常時内部モードは通常A / 通常B / 昇進チャンス / 昇進準備 / 会長準備の5系統。
- 会議室終了時に有利区間がリセットされる場合がある。
- 設定Lはデモ画面でタイトルパネル消灯。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- ゲーム数天井・チェリー回数天井をRESET。
- 内部モードRESET後、設定変更専用のモード振り分けを実施。
- 内部状態RESETを複数解析で確認。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数 / チェリー回数をCARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- ちょんぼりすたとスロパチクエストの設定変更/電源OFF→ON比較表で照合。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 本機はゲーム数天井700Gとチェリー30回天井を持つため、両カウンターを朝一判断に必要な天井進行として扱う。

### ceilingAfterReset
- 設定変更後も最大ゲーム数天井は700G。
- チェリー回数天井は最大30回。
- 設定変更専用の固定短縮天井G数は、検索語・資料系統を変えて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一の主な優遇は固定天井短縮ではなく、設定変更専用モード振り分け。

### modeAfterReset
- 設定変更時は内部モードを再抽選。
- 公開されている設定変更時の大分類振り分けは、通常Aまたは通常B 約14% / 昇進チャンス 約64% / 昇進準備または会長準備 約22%。合計100%。
- 設定変更時以外の有利区間リセット時は、通常Aまたは通常B 約25% / 昇進チャンス 約34% / 昇進準備または会長準備 約41%。
- 通常A/Bおよび昇進準備/会長準備の個別内訳は、高信頼資料で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。合算値をcanonicalとする。
- 据え置き / 純電源OFF→ON: CARRY_OVER。

### stateAfterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更時の状態別初期振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常遊技中も会議室終了時に有利区間RESETの可能性がある。

### resetBenefits
- 設定変更後は約64%で「昇進チャンス」へ移行。
- 設定変更後は「昇進準備または会長準備」へ約22%で移行。
- 設定変更時は通常A/B合算が約14%で、設定変更時以外の有利区間リセット時の約25%より低い。
- 朝一0Gから狙える機種として当時解析資料でも扱われるが、期待値の推定値は本DBには採用しない。

### resetPenalties
- 設定変更時は前日の天井進行・内部モード・内部状態を失う。
- 設定変更時以外の有利区間リセットと比較すると、昇進準備/会長準備合算は約41%→約22%へ低下する。昇進チャンスは約34%→約64%へ上昇するため、単純な全面優遇ではなくモード構成が変化する。
- 追加の朝一専用不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 前日最終ゲーム数 + 当日ゲーム数が700Gを超えてもボーナス非当選の場合、据え置きの700G天井進行と整合しないため設定変更濃厚材料となる、と当時解析で案内。
- ただしチェリー回数天井・通常抽選も存在し、日跨ぎのデータカウンターだけで完全判別はできない。
- 設定Lはデモ画面でタイトルパネル消灯。これは設定L判別であり、通常設定間の設定変更/据え置き判別とは別。
- 本機固有のガックン条件・発生率は、機種名・正式型式・メーカー・設定変更/朝一/据え置き/ガックン/リール始動を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ単独による朝一確定判別法は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード振り分け:
  - 通常A or 通常B: 約14%
  - 昇進チャンス: 約64%
  - 昇進準備 or 会長準備: 約22%
- 設定変更時以外の有利区間RESET時:
  - 通常A or 通常B: 約25%
  - 昇進チャンス: 約34%
  - 昇進準備 or 会長準備: 約41%
- ゲーム数天井: 700G。
- チェリー回数天井: 30回。

### publicMorningNumbers
- 設定変更後「昇進チャンス」: 約64%。
- 設定変更後「昇進準備 or 会長準備」: 約22%。
- 設定変更後「通常A or 通常B」: 約14%。
- 設定変更専用の固定短縮天井値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `課長 熊田工作 / 課長熊田工作 / S課長熊田工作GZA / 230226 / オーゼキ / NET` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 有利区間 / 天井 / チェリー天井 / モード移行 / モード振り分け / ガックン / 判別` を組み替えて検索。
- メーカー発表を伝える業界媒体、公安委員会検定情報、P-WORLD/遊技日本、グリーンべると、P-BOMB、パチビー、HAZUSE、ちょんぼりすた、イチカツ、スロパチクエスト、パチスロメソッド等を横断。

## conflicts
- 設定6機械割は、複数解析で107.0%が一致する一方、導入前系の単一二次資料に107.6%表記あり。107.0%をcanonical、107.6%を `CONFLICT_SECONDARY_PRE_RELEASE_VALUE` として保持。
- 純増は業界/複数解析で約3.0枚/Gが一致する一方、導入前単一二次資料に「2.5枚 or 5.0枚」表記あり。約3.0枚/Gをcanonical、後者を `CONFLICT_SECONDARY_PRE_RELEASE_OR_DEFINITION_ERROR` として保持。
- 一部サイト分類に「スマスロAT」とする表示があるが、正式型式はS型式で2023年当時の複数資料は6.5号機ATとして扱う。本DBでは6.5号機メダルATをcanonicalとする。
- イチカツの個別モード表示はHTML抽出上、通常A14%・通常B14%等のように合計100%を超える形で見える箇所がある。スロパチクエストの大分類表では「通常AorB 14% / 昇進チャンス64% / 昇進準備or会長準備22%」で合計100%となるため、大分類値のみcanonical採用し個別内訳は転記しない。

## sources
取得日: 2026-09-13

- ネット株式会社プレスリリース / DreamNews: https://www.dreamnews.jp/press/0000275853/
  - 2023年5月全国導入予定、熊酒場シリーズ番外編、出世回胴システム。
- P-BOMB: https://p-bomb.co.jp/industry/new-machine/6463/
  - 型式 `S課長熊田工作GZA`、製造元オーゼキ、6.5号機、会長92%ループ、期待枚数2000枚超。
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/22963/nippon
  - `S課長熊田工作GZA`（オーゼキ）の検定通過。
- PiDEA X 東京都公安委員会検定通過: https://www.pidea.jp/articles/1676260862
  - 型式 `S課長熊田工作GZA`、検定番号 `230226`。
- 遊技通信 東京都公安委員会検定通過: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%882%E6%9C%8813%E6%97%A5%EF%BC%89/
  - 型式・検定番号をPiDEAと照合。
- パチビー: https://www.pachibee.jp/machines/about/223040001
  - 2023-05-22導入、6.5号機AT、純増約3枚/G、コンプリート機能。
- グリーンべると: https://web-greenbelt.jp/post-69355/
  - 5月下旬導入予定、会長92%ループ、ボーナス後32G会議室。
- ちょんぼりすた: https://chonborista.com/slot/net-slot/184958/
  - 2023-05-22、設定別初当り/機械割、32.7G/50枚、純増約3.0枚/G、700G/チェリー30回天井、設定変更と電源OFF→ON比較、BIG70G約210枚/REG30G約90枚。
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/kacyou-kumadakousaku-tenjou/
  - 設定変更/電断の有利区間・天井・内部モード比較、設定変更時モード大分類14/64/22%、設定変更以外25/34/41%、リセット判別材料。
- イチカツ: https://itikatu.jp/kumadakousaku/
  - 設定別初当り/機械割、32.7G/50枚、純増3.0枚、設定変更後約64%昇進チャンス、電源OFF→ON天井引継ぎ。
- HAZUSE: https://hazuse.com/machine/pachislot/SX0046/genre/209/
  - 型式・検定番号、内部モード5種、設定変更/有利区間リセット時のモード抽選存在を確認。
- パチスロメソッド: https://slotmethod.jp/archives/16774/
  - 6.5号機AT、純増3.0枚、32.7G/50枚、設定Lタイトルパネル消灯。

## missingFields
- 設定Lの機械割・ボーナス初当り正確値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- 設定変更時の通常A/B個別振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- 設定変更時の昇進準備/会長準備個別振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- 本機固有ガックン条件・発生率: `UNVERIFIED_AFTER_RESEARCH`

coreStatus: COMPLETE_CORE
qaResetBehavior: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_NUMBERS
