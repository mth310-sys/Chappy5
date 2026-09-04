# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **620**
- latestMachineAdded: **赤ドン雅**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2011-11-21_akadon-miyabi.md`
- chronologicalFrontier: **2011-11-21**
- frontierLatestExactDateMachine: **赤ドン雅**
- schema: **resetBehavior v0.7**
- status: **CONTINUE_2011-11-21_SAME_DAY_GROUP**

## 今回の本線追加 — 赤ドン雅

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「巨人の星V～汗と涙と根性編～」を再取得して開始。
- 開始時正本は **recordCount 619 / chronologicalFrontier 2011-11-21**。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定どおり2011-11-21同日群を継続。repo code searchで「赤ドン雅」未検出を確認して620件目として追加。
- 導入日はパチビー、HAZUSE DATA、アタリ7、解析ガイドで **2011-11-21** 一致。当時K-Navi発表記事の「11月下旬予定」とも整合。

### 性能コア

- 5号機 / ボーナス+ART / セットストック型ART。
- メーカー: **エレコ**。
- 機械割: **98.2 / 99.1 / 101.7 / 104.9 / 109.5 / 115.8%**。
- BIG: **全設定共通1/1260.3**。
- ART初当り: **1/271.9 / 1/262.5 / 1/256.8 / 1/229.3 / 1/209.7 / 1/202.6**。
- BIG+ART合算: **1/253.9 / 1/246.1 / 1/241.1 / 1/217.7 / 1/200.4 / 1/194.0**。
- 50枚ベース（パチマガスロマガ解析値）: **31.54 / 31.61 / 31.67 / 31.75 / 31.81 / 31.88G**。同サイト実戦値31.83Gは定義分離。
- BIG: **約416枚**。
- ART「雅RUSH」: **1セット50G・約+1.8枚/G**。
- 祇園モード: 雅RUSHと同基本性能、ドン揃い確率が雅RUSH中の約200倍。
- 通常天井: **ボーナス・ARTともに引かず約1400G**。
- 天井恩恵（当時解析）: **雅RUSH 3セット以上 + 50%で祇園モード**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- 2011-11-22公開・2012-01-08更新の当時攻略記事で **「設定変更しても天井までのゲーム数は引き継ぐ」** と明記され、本文は当時のパチスロ必勝ガイド天井狙い資料を参照している。
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE_PERIOD_ANALYSIS**。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED / NORMAL_1400G_PROGRESS_RETAINED**。
- 天井進捗は設定変更でも保持されるため、前日ハマリを設定変更で消せない性質が朝一客の主要な狙い要素になり得る。ただし新規付与される「リセット恩恵」とは区別。
- 別系統の現存解析（セブンピース）は設定変更項目を「調査中」としており、天井引継ぎは **ANALYSIS_SINGLE_PERIOD_SOURCE_WITH_PRINT_REFERENCE** として保存。一般則から信頼度を上げない。
- 据え置き時は天井進捗の保持が強く示唆されるが、低確/通常/高確等の状態・ARTストック等の全保持は直接確定せずUNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON、設定変更時のモード/状態振り分け、ガックン/初期出目/液晶等の変更判別は検索語・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一高確保証、朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_WITH_COUNTER_CARRYOVER_PERIOD_ANALYSIS**。

### CONFLICT / 注意

1. 後年5号機クロニクルの赤ドン雅欄に「BIG約204枚/REG約48枚」「ART約+1.4枚/G」等、本機の当時公式・業界・複数解析資料（BIG416枚、REG非搭載、ART約+1.8枚/G）と合わない記述があり、別機種情報の混線疑いとして不採用。機械割98.2～115.8%のみ他資料と一致。
2. 設定変更天井引継ぎは当時更新攻略記事に直接記述がある一方、別現存解析は設定変更「調査中」。数値競合ではないが直接確定度差を保持。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 620 / chronologicalFrontier 2011-11-21**から開始。
2. **2011-11-21同日群を閉じずに継続**する。
3. 次候補 **ミラクルジャグラー（北電子）** をrepo重複確認し、未登録なら621件目として性能コア＋resetBehavior v0.7を処理する。
4. 先行確認済み: 北電子公式/K-Naviで設定別BB・RB・合算・出玉率を取得可能。北電子公式値は出玉率 **95.7 / 97.5 / 99.0 / 101.2 / 103.9 / 107.9%**（工場データ予測値）。後年攻略資料には別の出玉率 **96.16 / 98.07 / 99.95 / 102.04 / 105.02 / 109.42%** があるため、次回はメーカー公表値と攻略条件差を混ぜずCONFLICT/定義差を精査する。
5. 型式名候補は **ミラクルジャグラーK**。導入具体日は11/21系資料を再照合して確定する。
6. ミラクルジャグラー処理後も11/21同日群をK-Navi、HAZUSE、メーカー別一覧、当時業界記事で最終監査してから次の日付へ進む。
7. 後継「スーパーミラクルジャグラー」「ウルトラミラクルジャグラー」の朝一情報を2011年機へ流用しない。
8. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を組み替えて再探索。
9. 競合値は平均せずCONFLICT。一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### 赤ドン雅
- ユニバーサルエンターテインメント公式アプリ告知: `https://www.atpress.ne.jp/news/24080`
- グリーンべると: `https://web-greenbelt.jp/00002282/`
- K-Navi 発表会: `https://p-kn.com/topics/exhibition/858/`
- K-Navi 機種: `https://p-kn.com/slot/1514/`
- パチビー: `https://www.pachibee.jp/machines/index/211090007`
- HAZUSE DATA: `https://data.hazuse.com/?genre=202&machine_code=1S0702`
- アタリ7: `https://www.atari7.com/slot/date1320125354.php`
- パチマガスロマガ 設定別1000円回転数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/87/c-1.php`
- パチマガスロマガ 実戦値: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/87/c.php`
- パチスロ解析ガイド: `https://pachislot-guide.net/2011/akadon-miyabi/`
- 当時天井解析記事: `https://mezase20.com/blog-entry-488.html`
- セブンピース旧解析: `https://www.mb.ccnw.ne.jp/seven-peace.com/akadon/akadon.html`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6501`
- パチマガスロマガFREE回顧: `https://pachimaga.com/free/column/004b8961d880fd0b022d12122759f3433a9efd9f.php`

### 次回候補先行確認
- 北電子公式「ミラクルジャグラー」: `https://www.kitadenshi.co.jp/slot/miraclejuggler/`
- K-Navi「ミラクルジャグラー」: `https://p-kn.com/slot/1507/`
- パチナビ回顧整理: `https://pachinavi.net/machines/miracle-juggler/`

### 次回順序確認
- **2011-11-21同日群を継続。第一候補はミラクルジャグラー。同日最終監査後に次の日付へ進む。**