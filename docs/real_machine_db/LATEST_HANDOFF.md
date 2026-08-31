# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準153件。**
- 152件目 `信長の野望 天下創世 第二の刻` が並行リレーで先にmainへ反映されたため重複登録を回避し、その次の未処理候補から継続した。
- 2007-08-24候補 `そば屋の源さん` はパチスロではなく `CRそば屋の源さん`（パチンコ）と業界一次記事・攻略DBで確認し、本DB本線から除外。
- 153件目として `セブンボンバーA / 7BOMBER` を登録。
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。既存COMPLETE_COREの性能完了判定は崩さず、resetBehaviorQAを別管理。

## 今回新規追加

### 153. セブンボンバーA（バルテック）

- `docs/real_machine_db/machines/2007-08-27_seven-bomber-a.md`
- releaseDate本線: `2007-08-27`
  - バルテック公式: 3号機 `7BOMBER` の遺伝子を継承する5号機、完全告知タイプ
  - ALL7.jp: `7BOMBER` / バルテック / 2007-08-27導入予定
  - パチビー: `セブンボンバーA` / 2007-08-27導入
- generation: 5号機
- systemType: ノーマル / 完全告知 / 小役同時成立
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

パチマガスロマガ解析値:

- BIG: `1/399.61 → 1/358.12`
- REG: `1/689.85 → 1/524.29`
- ボーナス合成: `1/253.03 → 1/212.78`
- 50枚ベース: `43.49 → 46.84G`
- BIG: 405枚超払い出し終了 / 純増約364枚
- REG: 105枚超払い出し終了 / 純増約104枚
- 出玉増加RT/ART/ATは確認されず、netIncreaseは `NOT_APPLICABLE`

機械割は平均せずCONFLICT:

- パチマガスロマガ（シミュレート）: `96.85 / 98.67 / 100.52 / 102.08 / 103.48 / 104.68%`
- 5号機クロニクル / HAZUSE系: `96.7 / 98.4 / 100.2 / 102.5 / 104.2 / 106.1%`

設定4〜6を中心に丸め差以上の差があるため両系列を保持。

## v0.7 resetBehavior

- `セブンボンバーA / 7BOMBER / 7 BOMBER / バルテック / 2007` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン` を組み替え、メーカー公式、当時解析、導入DB、後年5号機DB・回顧資料を横断。
- 通常時ゲーム数天井、周期CZ、朝一専用モード、設定変更専用当選率、リセット短縮天井は `NONE_CONFIRMED`。
- 設定変更/据え置き/電源OFF→ON時の本機固有内部状態処理は高信頼資料で確定できず `UNVERIFIED`。
- 本機固有のリールガックン、表示等による設定変更/据え置き判別も再探索後 `UNVERIFIED`。
- 公開朝一数値、リセット恩恵発生率は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。

## 2007年8月24〜27日境界監査

- `そば屋の源さん`（三洋）: `CRそば屋の源さん`。2007-07-27グリーンべるとでパチンコ新機種と確認。9/2納品開始予定、K-Naviも8/23直営先行導入・9/3全国導入とする。**パチスロ本線から除外。**
- `それゆけエリちゃん`（タイヨーエレック）: 2007-07-20グリーンべるとで `CRそれゆけエリちゃん` と確認。パチビーでもCR表記。**パチスロ本線から除外。**
- `今夜もドル箱R`（マルホン）: パチマガスロマガ/K-Naviでパチンコ機 `CR今夜もドル箱R` と確認。**パチスロ本線から除外。**
- `7BOMBER / セブンボンバーA`（バルテック）: パチスロ5号機として今回処理済み（153）。

ALL7の「すべて」一覧はパチンコとパチスロが混在するため、同一覧の日付だけで本線へ混入させない。

## Bun Bun Maru 境界監査（継続HOLD）

- 一部一覧には `Bun Bun Maru-L / -R` が2007年7月候補として出るが、平和系資料・検定系資料の横断でも2007年パチスロ5号機として独立確認が弱い。
- 同時期にパチンコ `CRスーパーブンブン丸` 系が存在するため、パチスロ独立証拠が出るまで `UNRESOLVED / HOLD` 継続。

## resetBehavior 遡及QA進捗

- 新規153はv0.7 resetBehaviorを同時収集済み。
- 古い側は最古レコードから再確認を継続。
- 既存COMPLETE_COREは性能コア完了判定として維持し、resetBehaviorQAを別管理する。
- 次回も古い順にresetBehavior欠損有無を確認し、未追加の最古レコードが見つかった場合のみ補完する。

## 今回の主要出典

### セブンボンバーA
- バルテック公式: https://www.baltec.co.jp/product/product06.html
- ALL7.jp 2007年8月: https://www.all7.jp/plans/index/2007/08
- パチビー 2007年8月: https://www.pachibee.jp/machines/schedule/2007-08
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/50/h.php
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/50/a.php
- パチマガスロマガ 小役/1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/50/c.php
- HAZUSE: https://hazuse.com/i/data/sevenbomber/top.htm
- 5号機クロニクル バルテック: https://5goki.com/baltec
- P-WORLD: https://www.p-world.co.jp/machine/database/4844

### 種別除外
- グリーンべると `CRそば屋の源さん`（2007-07-27）: https://web-greenbelt.jp/00004232/
- K-Navi `CRそば屋の源さん`（2007-08-29）: https://p-kn.com/topics/news/329/
- グリーンべると `CRそれゆけエリちゃん`（2007-07-20）: https://web-greenbelt.jp/00004241/
- パチマガスロマガ `今夜もドル箱R` パチンコDB: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/maruhon_pachi/162/p_dai.php

取得日: 2026-08-31

## 今回GitHub反映

- `セブンボンバーA` 新規追加: `b6f33c9233aca4338e2a687e731ea4fd9848ec54`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準153件地点から継続。2007年8月28〜31日のパチスロ漏れをメーカー別一覧・当時業界記事・導入DBで最終監査する。**
2. 8月末に未処理パチスロがなければ、2007年9月の最古導入パチスロへ進む。ALL7等の混合一覧は必ずパチンコ/パチスロ種別を別ソースで確認する。
3. `Bun Bun Maru` はパチスロ独立証拠がない限りHOLD継続。
4. QAは既存全レコードを古い順に確認し、`resetBehavior` 欠損を見つけた最古機から補完。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
6. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの153件地点を正**として継続する。
