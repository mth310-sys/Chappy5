# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準152件。**
- 151件目 `Mr.MARIC` まで完了済みの地点から、2007-08-20同日群を継続。
- 152件目として `信長の野望 天下創世 第二の刻` を登録。
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。既存COMPLETE_COREの性能完了判定は崩さず、resetBehaviorQAを別管理。

## 今回新規追加

### 152. 信長の野望 天下創世 第二の刻（IGTジャパン）

- `docs/real_machine_db/machines/2007-08-20_nobunaga-no-yabou-tenka-sousei-daini-no-toki.md`
- releaseDate本線: `2007-08-20`
  - 2007-08-07付プレイグラフ転載: IGTが「販売を開始」
  - ALL7.jp: 2007-08-20導入予定
  - パチビー: 2007-08-20導入
  - HAZUSE当時ページ: 2007年8月
- generation: 5号機
- systemType: ノーマル / ボーナス主体 / 小役同時成立 / 3GプチRT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

パチマガスロマガ解析値:

- BIG合成: `1/399.61 → 1/356.17`
- REG合成: `1/655.36 → 1/468.11`
- 全ボーナス合成: `1/248.24 → 1/202.27`
- 50枚ベース（プチRT非考慮）: `44.63 → 47.75G`
- BIG: 400枚超払い出し終了 / 純増約360枚
- REG: 8回入賞または12G消化 / 純増約104枚
- チェリー入賞後3GプチRT、RT中リプレイ `1/2.50`

5号機クロニクルのボーナス確率丸め値はパチマガスロマガと整合。

機械割は平均せずCONFLICT:

- パチマガスロマガ（シミュレート）: `97.68 / 99.23 / 100.76 / 102.67 / 104.19 / 105.73%`
- 5号機クロニクル: `97.4 / 99.3 / 101.0 / 103.1 / 105.5 / 108.3%`
- 2007年当時新台一覧保存資料も `97.4%〜108.3%` で後者レンジと整合

定義/算出条件差の可能性があるため平均化しない。

## v0.7 resetBehavior

- `信長の野望 天下創世 第二の刻 / 天下創生 第二の刻 / IGT / 型式・表記揺れ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / プチRT / ガックン` を組み替え、当時HAZUSE、パチマガスロマガ、K-Navi、業界記事、古いDB・回顧資料まで再探索。
- 通常時ゲーム数天井、周期CZ、朝一専用モード、設定変更専用当選率、リセット短縮天井は `NONE_CONFIRMED`。
- 5号機ノーマルタイプで、有利区間は `NOT_APPLICABLE`。
- 設定変更・据え置き・電源OFF→ON時の3GプチRT残状態/残G処理は本機固有の高信頼資料で確定できず `UNVERIFIED`。
- 本機固有のリールガックン、液晶表示等による変更判別、公開朝一数値も十分再探索後 `UNVERIFIED / NONE_CONFIRMED`。

## 2007年8月20日境界監査

- `パチスロ戦国無双`: 処理済み（150）。
- `Mr.MARIC`: 処理済み（151）。
- `信長の野望 天下創世 第二の刻`: 今回処理済み（152）。
- `パタリロ!`: 既に149件目として処理済み。
- `ひらけ!ゴマーヤX / 嘉門達夫のたのしい昔話`: パチンコ系と確認済みのため本DB本線から除外。

2007-08-20群は現時点で確認済み候補を処理完了。次は8/24以降へ進む。

## Bun Bun Maru 境界監査（継続HOLD）

- 一部一覧には `Bun Bun Maru-L / -R` が2007年7月候補として出るが、平和系資料・検定系資料の横断でも2007年パチスロ5号機として独立確認が弱い。
- 同時期にパチンコ `CRスーパーブンブン丸` 系が存在するため、パチスロ独立証拠が出るまで `UNRESOLVED / HOLD` 継続。

## resetBehavior 遡及QA進捗

- 新規152はv0.7 resetBehaviorを同時収集済み。
- 古い側は最古レコードから再確認を継続。
- `2005-09 新世紀エヴァンゲリオン`、`2005-10 日本一の桃太郎CT5`、`2005-12 信長の野望・天下創世R` はresetBehavior追加済みを既確認。
- 次回も古い順に欠損有無を確認し、resetBehavior未追加の最古レコードが見つかった場合のみ補完する。
- COMPLETE_COREは性能コア完了判定として維持し、resetBehaviorQAを別管理する。

## 今回の主要出典

### 信長の野望 天下創世 第二の刻
- Pマンズ / プレイグラフ 2007-08-07: https://p-mans.blogspot.com/2007/08/
- ALL7.jp 2007年8月: https://www.all7.jp/plans/index/2007/08
- パチビー 2007年8月: https://www.pachibee.jp/machines/schedule/2007-08
- パチマガスロマガ機種DB: https://psmaga.com/database/machine/slot_index.php?id=5939
- パチマガスロマガ基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/47/a.php
- パチマガスロマガ小役/1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/47/c.php
- HAZUSE当時ページ: https://hazuse.com/i/data/nobunaga2/top.htm
- 5号機クロニクル IGT: https://5goki.com/igt
- 2007年当時新台一覧保存資料: https://paperzz.com/doc/5762410/%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7
- パチセブン IGT回顧: https://pachiseven.jp/articles/detail/13009

取得日: 2026-08-31

## 今回GitHub反映

- `信長の野望 天下創世 第二の刻` 新規追加: `a9e75121ee891207fd62fea9ec3e70aa106a6a2b`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準152件地点から継続。2007-08-24候補 `そば屋の源さん`（三洋）を最優先で、パチスロ種別・具体導入日を再確認して処理する。**
2. その後2007-08-27群の `7BOMBER / セブンボンバーA`、`それゆけエリちゃん` 等について、パチスロ/パチンコの種別を混同せず監査し、最古未処理パチスロから進む。
3. `Bun Bun Maru` はパチスロ独立証拠がない限りHOLD継続。
4. QAは既存全レコードを古い順に確認し、`resetBehavior` 欠損を見つけた最古機から補完。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
6. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの152件地点を正**として継続する。
