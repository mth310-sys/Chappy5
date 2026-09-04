# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **605**
- latestMachineAdded: **エージェント・クライシス**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2011-10-02_agent-crisis.md`
- chronologicalFrontier: **2011-10-02**
- frontierLatestExactDateMachine: **エージェント・クライシス**（10-02納品予定 / 10-03ホール導入開始の定義差）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — エージェント・クライシス

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード、recursive machine treeを再取得して開始。
- 実行途中でmainが600件地点から604件まで先行更新されていることを検知。600件時点の候補作業を破棄し、**recordCount 604 / chronologicalFrontier 2011-09-19 / マジカルハロウィン3**を正本としてリベースした。
- 09-19納品 / 09-20導入群と09-26境界を監査し、次の具体的なパチスロ市場投入群として10-02納品 / 10-03導入群を確認。
- repo上で本機未登録を確認し、605件目として追加。
- グリーンべると: **2011-10-02納品開始予定**。K-Navi: **2011-10-03ホール導入開始**。`DATE_DEFINITION_DIFFERENCE`として両方保持し、時系列キーは最古の具体的市場投入日10-02。
- 型式名 **エージェントクライシス**、検定番号 **1S0597**。

### 性能コア

- 5号機 / 高純増ART + AT + CZ / ゼロボーナス系構造。
- 機械割: **98.5 / 99.6 / 101.9 / 105.2 / 109.4 / 115.8%**。
- ART初当り: **1/291 / 1/263 / 1/274 / 1/232 / 1/248 / 1/193**。
- CZ: **1/631 / 1/613 / 1/581 / 1/564 / 1/514 / 1/493**。
- ART「エージェントラッシュ」: **基本30G+α / 約+3.0枚/G**。
- AT「エージェントタイム」: **30G固定 / 約+1.8枚/G**。
- 「バーニングバレット」: **23G**、毎G最低5G上乗せのため最低**115G**上乗せ。
- ART終了後「クライシスミッション」: **23G**。
- 通常天井: **クライシスミッション失敗後の最終CZ終了後から1200G**。到達時はエージェントミッション経由でART。
- 50枚ベースは表記揺れ・略称・メーカー・型式名と50枚/1000円/千円/ベース/コイン持ち/回転数を組み替えて再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE_WITH_BASE_GAMES_UNVERIFIED**。

### resetBehavior v0.7

- K-Naviに本機専用の **「設定変更後の挙動」**解析項目が現存することまで直接確認。
- ただし現在の取得経路では具体本文を回収できず、検索語・資料系統を変更して再探索しても、設定変更時の1200G天井カウンタCLEAR/RETAINを別本文で直接確定できなかった。
- したがって `settingChangeBehavior` / `gameCounterReset` / `modeAfterReset` / `stateAfterReset` は **UNVERIFIED_AFTER_RESEARCH**。項目名だけから内容を推測しない。
- 据え置き時の天井・モード・前兆/CZ/AT/ART状態の保持、単純電源OFF→ON、ガックン/初期出目/液晶/ランプによる変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井の構造と1200G数値自体は **CONFIRMED**。
- 設定変更専用短縮天井、高確スタート保証、ART付与、朝一特定G以内の公開優遇率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

### CONFLICT / 資料品質

- releaseDate: **10-02納品開始予定** vs **10-03ホール導入開始**。定義差として保持し平均化しない。
- 5号機クロニクルは機械割系列がP-WORLDと一致する一方、本機セクション周辺の基本スペック・ゲーム性本文に別機種由来とみられる混線があるため `SOURCE_CONTENT_INCONSISTENCY`。主根拠には使用しない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 605 / chronologicalFrontier 2011-10-02**から開始。
2. エージェント・クライシスを重複追加しない。
3. **2011-10-02納品 / 10-03導入群**を同日市場群として最終監査。
4. K-Navi 10/03群で確認済みの候補、特に **パチスロ「ケロット2」**、**快盗天使ツインエンジェル3**、**パチスロ X JAPAN**、**サムライスピリッツ鬼**、**REVO**を、各機種の納品日定義も含め最古順にrepo重複確認して次の未処理機を確定する。
5. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### エージェント・クライシス
- グリーンべると: `https://web-greenbelt.jp/00002258/`
- K-Navi: `https://p-kn.com/slot/1478/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6453`
- グリーンべると 5号機史回顧: `https://web-greenbelt.jp/post-49774/`
- 5号機クロニクル: `https://5goki.com/universal`（当該周辺に本文混線があるため照合補助のみ）
