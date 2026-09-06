# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **838**
- latestRecordAdded: **沖ドキ！**（アクロス）— 2014-08-18
- latestRecord: `docs/real_machine_db/machines/2014-08-18_okidoki.md`
- chronologicalFrontier: **2014-08-18**
- frontierLatestMachine: **沖ドキ！**
- schema: **resetBehavior v0.7**
- status: **2014-08-18_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、837件目 `2014-08-04_pachislot-hellsing.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **837件 / 2014-08-04 / 08-04_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 前回handoff指定どおり **2014-08-05〜08-17境界監査**を行い、その後2014-08-18「沖ドキ！」をNo.838として処理した。

## 2014-08-05〜08-17境界監査

- `2014年8月5日〜17日` の日付表記揺れと `パチスロ / 導入 / 導入開始 / ホール導入 / 納品` を組み替え、業界記事・機種DB・導入日資料を横断。
- 8/8ニューギン「花慶の日」等はイベント記事で新機種導入日ではない。
- 8/11「回胴祭2014」はファンイベント日で導入アンカーではない。
- 後年の撤去カレンダーに「押忍！サラリーマン番長」「アレジン」の2014-08-11表記があるが、これは当該ページ上 **検定通過日** の列でありホール導入開始日ではないため境界機として混入させない。
- 今回の検索で、08-05〜08-17にホール導入開始日を具体日で固定できる未登録5号機は確認できなかったため **2014-08-05_TO_08-17_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 今回追加 — 沖ドキ！

### identity / 性能コア

- manufacturer: **アクロス**。
- hall start: **2014-08-18**。HAZUSEと2014-08-01グリーンべると業界記事で一致。業界記事は8/18から全国展開、約4000台規模の全国ロケテストと説明。
- 型式: **沖ドキ！LL** / 検定 **4S0298**。
- type: **5号機 / モード管理型AT / 疑似ボーナス / 完全告知**。
- 機械割: **97.0 / 99.7 / 101.7 / 103.9 / 106.2 / 107.9%**。
- 公開基本スペックのBIG: **1/394.1 / 377.0 / 362.4 / 347.6 / 334.7 / 322.6**。
- REG: **1/632.1 / 584.8 / 546.2 / 510.5 / 479.6 / 452.1**。
- 合成: **1/242.8 / 229.2 / 217.9 / 206.8 / 197.1 / 188.3**。
- 50枚ベース: **約23G**。
- 疑似ボーナス純増: **約3.0枚/G**。
- BIG **70G / 平均約210枚**、REG **30G / 平均約90枚**。
- 通常A/B最大天井999G、引き戻し/チャンス最大199G（一般表記200G以内）、天国以上/保証最大31G（32G以内）。
- HAZUSE通常A/B滞在時解析には実質合成 **1/247.4→1/189.5** の別表があるが、全モード込み公開基本スペックとは定義が異なるため平均せず `DEFINITION_DIFFERENCE_NOT_AVERAGED` として保持。
- coreStatus: **COMPLETE_CORE**。

## resetBehavior v0.7 — 沖ドキ！

- settingChangeBehavior: HAZUSE当時解析で **設定変更時に天井G RESET・内部モード再抽選**を直接確認。
- gameCounterReset:
  - 設定変更: `RESET_CONFIRMED`
  - 据え置き: `CARRYOVER_SUPPORTED_BY_ANALYSIS`
  - 電源OFF→ONのみ: `CARRYOVER_SUPPORTED_BY_ANALYSIS`
- modeAfterReset: **RESET_AND_REROLL_CONFIRMED**。
- 設定変更時モード振り分け（全設定共通）:
  - 通常A **57.03%**
  - 通常B **9.77%**
  - チャンス **33.20%**
- ceilingAfterReset: 固定短縮抽選ではなく、**33.20%でチャンスモード→最大199G**というモード再抽選由来の朝一短天井恩恵。
- resetBenefits: チャンス33.20%、さらに通常B9.77%。チャンス初回当選後は通常B以上濃厚。
- stateAfterReset: モード以外の独立した朝一高確/低確再抽選契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- powerCycleBehavior: 後年の初代解析整理で天井G・内部モード引継ぎを確認。ただしメーカー/当時一次対照表ではないため信頼度を一段下げる。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 初代解析整理で **ガックン判別不可**。ハイビスカス点灯は次回モード示唆であり、朝一設定変更確定表示ではない。
- resetPenalties: 設定変更なら前日天井進捗・モードが消える。独立したリセット冷遇抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。
- publicMorningNumbers: **通常A57.03 / 通常B9.77 / チャンス33.20%**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-08-18群監査 — OPEN

- 「沖ドキ！」25Φ版はNo.838として登録。
- HAZUSEは **25パイコイン使用機 / 30パイ用筐体も同時リリース**と記載。
- 1GAME/一撃系のメーカー一覧は **「沖ドキ！」と「沖ドキ！-30」双方を2014-08-18導入の別掲載機種**として扱う。
- 2021年業界8団体関連報道でも旧規則機を **「沖ドキ！」「沖ドキ-30」**と別名称で列挙している。
- 本DBはCT5/CT30等の径違い派生も独立レコード化している前例があるため、次回はまず **沖ドキ！-30を独立レコード化すべき型式/仕様差・資料上の独立性を最終確認**する。
- 30Φ版が独立機種として十分固定できればNo.839として登録。単なる同型式の筐体径違いで独立レコード不要と判断する場合も、根拠をHANDOFFへ明記する。
- その後、2014-08-18同日群を全メーカー横断で再監査してCLOSED判定する。

## 遡及 resetBehavior QA カーソル

- 新規収集を止めない。
- 次の遡及QAカーソルは `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）を維持。

## safeguard

- `沖ドキ！ / 沖ドキ / OKI DOKI / 沖ドキ！LL / アクロス / ユニバーサル` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 199G / 200G / モード / チャンス / ガックン / 50枚 / ベース` を組み合わせて再探索。
- `沖ドキ！トロピカル / DUO / GOLD / BLACK / ゴージャス`等の後継機リセット仕様を初代へ流用しない。特に後継機のチャンス39.8%、399G短縮は初代仕様ではない。
- 199G/200G以内、31G/32G以内は内部最大規定Gと告知レンジの表記差として保持しCONFLICT化しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 838 / chronologicalFrontier 2014-08-18 / 08-18_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 838件目を再確認。
3. **「沖ドキ！-30」**について、25Φ版とは独立した機種/型式としてDB登録すべきかを公式・業界・当時DBで最終確認。
4. 独立性が固定できればNo.839として性能コア+resetBehavior v0.7を収集。性能同一でも25Φ値を無根拠コピーせず、同一仕様資料を明記する。
5. 続いて08-18同日群を全メーカー横断監査し、追加未処理を順に処理してからCLOSED判定。
6. 遡及QAは `2007-02_pachislot-tekken-den-tough.md` から再開。

## 主要出典 — 取得日 2026-09-07

### 沖ドキ！
- グリーンべると（2014-08-01）: `https://web-greenbelt.jp/00007110/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0298/`
- HAZUSE AT/ART: `https://hazuse.com/machine/pachislot/4S0298/genre/209/`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/04/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7494`
- 期待値見える化 朝一/天井: `https://slotjin.com/zone/okidoki/`
- PiDEA ロケテスト: `https://www.pidea.jp/articles/%E3%82%A2%E3%82%AF%E3%83%AD%E3%82%B9%E3%80%8C%E6%B2%96%E3%83%89%E3%82%AD%21%E3%80%8D%E3%81%8C%E3%80%8C%E6%B2%96%E3%82%B9%E3%83%AD%E6%96%B0%E6%99%82%E4%BB%A3%E3%80%8D%20%E3%82%92%E5%88%87%E3%82%8A%E6%8B%93%E3%81%8F`

### 境界 / 30Φ確認
- 一撃 UNIVERSALメーカー一覧: `https://1geki.jp/maker/universal/`
- グリーンべると / P-WORLD 2021撤去要請: `https://news.p-world.co.jp/articles/15585/greenbelt`
- パチ7 撤去カレンダー（検定通過日との定義確認用）: `https://pachiseven.jp/articles/detail/11356`
