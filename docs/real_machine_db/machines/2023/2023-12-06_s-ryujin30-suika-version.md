# パチスロ琉神－30 スイカバージョン

recordNo: 1612
machineName: パチスロ琉神－30 スイカバージョン
aliases: 琉神-30 スイカバージョン / S琉神30 スイカバージョン / 竜神30 / 龍神30
manufacturer: オレンジ（製造） / 藤商事
formalModel: S琉神RZ-30 スイカバージョン
inspectionCode: 330354
releaseDate: 2023-12-06
releaseDateQualifier: 一部地域テスト導入開始。複数機種DBは2023-12-04導入表記のためCONFLICT保持。
generation: 6.5号機 / 30φメダル
systemType: AT / 擬似ボーナス連チャン・完全告知
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 遊技通信の2023-11-21記事は「12月から一部地域でテスト導入予定」と明記。
- 一撃の実戦資料は「2023年12月6日より一部地域でテスト導入開始」と明記。
- 一撃オンライン遊説、必勝本、HAZUSE、複数攻略DBは2023-12-04を導入開始日として掲載し、一撃側は同時に「一部地域にてテスト導入」と注記。
- 全面全国導入日として12/4を断定せず、時系列本線では実導入を明示する12/6一部地域テストをcanonical日として採用し、12/4をCONFLICTとして保持。
confidence: INDUSTRY_HIGH / ANALYSIS_HIGH / CONFLICT_RELEASE_BOUNDARY

## corePerformance
payoutRateBySetting:
- 1: 97.4%
- 2: 99.1%
- 4: 101.1%
- 5: 104.1%
- 6: 106.4%
bonusProbabilityBySetting:
- setting1: BIG 1/428.5 / REG 1/505.6 / 合算 1/231.0
- setting2: BIG 1/410.8 / REG 1/499.4 / 合算 1/224.3
- setting4: BIG 1/395.2 / REG 1/485.2 / 合算 1/217.2
- setting5: BIG 1/372.7 / REG 1/470.5 / 合算 1/206.9
- setting6: BIG 1/355.4 / REG 1/460.7 / 合算 1/199.5
baseGamesPer50: 約32.2G/50枚（設定L除き共通）
netIncrease: 擬似ボーナス 約3.0枚/G
basicPayout:
- BIG: 約200枚（8枚ベル40回）
- REG: 約70枚（8枚ベル14回）
confidence: OFFICIAL_FOR_BONUS_PROBABILITY / ANALYSIS_HIGH_FOR_PAYOUT_BASE_NET

## modeSpecificMinimumData
- 通常時最大999G+αでボーナス当選。
- 通常時は全役でボーナス抽選、スイカ成立時のボーナス期待度約40%。
- 内部モード/状態として通常・状態・天国・超天国等が存在。天国/超天国は32G以内連チャンに関与。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_DETAIL_PARTIAL
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は天井までのゲーム数RESET、モード再抽選。
- 設定変更後は専用の「朝イチモード」へ移行。
- 朝イチモードは通常モードより天国移行率が優遇され、一度天国へ移行するまで朝イチモードをループする。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は天井ゲーム数・モードを引き継ぐ扱い。純電源OFF→ON比較表と整合。
- 有利区間・「状態」そのものの据え置き時詳細契約は機種固有資料で十分に固定できず、該当部分は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMES/MODE / UNVERIFIED_OTHER_INTERNALS

### powerCycleBehavior
- 純電源OFF→ONのみでは天井までのゲーム数、モードをCARRY_OVER。
- 有利区間・特殊「状態」・スイカゾーン内部状態まで含む完全な電断比較は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMES/MODE

### gameCounterReset
- 設定変更時: 天井ゲーム数RESET。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常最大999G+α。
- 設定変更専用の固定短縮天井は、必勝本・一撃・主要攻略/旧DBを再探索した範囲で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一恩恵は天井短縮ではなく専用朝イチモードによる天国移行優遇が主。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は専用朝イチモード。
- 朝イチモードは天国移行率が通常より優遇、一度天国に入るまで同モードをループ。
- 朝イチモード→天国の具体的移行率、設定別振り分け率は再探索後も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_NUMERIC_RATE

### stateAfterReset
- 「状態」「スイカゾーン」等の設定変更時初期振り分けは、公式・業界・一撃・必勝本・旧DB系を再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時の有利区間RESETは世代仕様と整合するが、本機固有資料で明示比較を十分固定できなかったため `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 電源OFF→ON時も同様に機種固有直接契約は未固定。

### resetBenefits
- 朝イチモードに移行し、通常モードより天国移行率が優遇。
- 天国突入まで朝イチモードがループするため、設定変更後は通常営業中より32G内連チャン状態への到達期待が上がる。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時固有の定量的不利要素は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 一撃/攻略資料では朝一モード恩恵は確認できるが、外見だけでの確実なリセット判別法は固定できない。
- 本機固有ガックン条件・発生率、有利区間ランプを用いた確実な変更判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_DETECTION_AFTER_RESEARCH

### numericResetData
- 通常天井: 999G+α。
- リセット専用固定天井短縮: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝イチモード: 天国移行率優遇、天国突入までループ。
- 朝イチモード具体的天国移行率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 公開された朝イチ専用固定確率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 定性恩恵: 専用朝イチモード、天国移行率優遇、天国突入までループ。

## conflicts
- 導入日: 複数DB/攻略資料 `2023-12-04` vs 一撃実戦資料 `2023-12-06より一部地域テスト導入`、業界記事 `12月から一部地域テスト導入予定`。全国通常導入と地域テストの定義差があるため平均化せず `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY`。
- 必勝本の検索表示では設定行がL/1/2/3/4/5に見える箇所があるが、藤商事公式・遊技日本・一撃で設定1/2/4/5/6が一致するため公式設定構成をcanonical採用。

## missingFields
- morning mode exact transition rate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset initial special-state distribution: UNVERIFIED_AFTER_RESEARCH
- machine-specific advantageous-section power/reset contract: UNVERIFIED_AFTER_RESEARCH
- reset detection/gackun: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2023-12-04 canonical通常導入群7機はNo.1605〜1611でCLOSED。
- 本機は同群から分離し、2023-12-06一部地域テスト導入レコードとしてNo.1612採番。12/4表記との境界CONFLICTはレコード内保持。
- 次の通常導入群候補は2023-12-18。

## sources
取得日: 2026-09-13
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_ryujin/
- 遊技日本 販売発表: https://news.p-world.co.jp/articles/25900/nippon
- 遊技通信 発表/一部地域テスト: https://news.p-world.co.jp/articles/26062/yugitsushin
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-60861/
- 一撃 実戦/12月6日地域テスト: https://1geki.jp/slot/s_ryujin30/7/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_ryujin30/4/
- 一撃 設定判別: https://1geki.jp/slot/s_ryujin30/0/
- 一撃 オンライン遊説（ベース/純増/12月4日表記・地域テスト注記）: https://1geki.jp/slot/s_ryujin30/39/
- 必勝本 天井/設定変更/電源OFFON: https://hisshobon.com/machineinfo/82324/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/82327/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/82329/
- HAZUSE 型式/検定番号: https://hazuse.com/en/machine/pachislot/SX0056/

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_DETAIL_PARTIAL
