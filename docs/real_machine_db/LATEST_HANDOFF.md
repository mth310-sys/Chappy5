# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **451**
- latestMachineAdded: **ゼットゴールドEX**
- latestRecord: `docs/real_machine_db/machines/2010-02-21_z-gold-ex.md`
- chronologicalFrontier: **2010-02-21**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 450件「パチスロ BLOOD+」地点から2010-02-15同日群〜2/20境界を再監査し、発表/内覧会日を導入日と混同しないよう確認。これより早い具体導入日の未登録パチスロを確定できなかったため、具体日確認済みの「ゼットゴールドEX」（2010-02-21）を451件目として追加。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、前線レコード `2010-02-15_pachislot-blood-plus.md` を再読。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わずLATEST_HANDOFF＋実レコードを優先。
- 開始時mainは450件 / chronologicalFrontier 2010-02-15 / latestMachineAdded パチスロ BLOOD+。
- repo検索で「ゼットゴールドEX」既存レコードなしを確認してから追加。

## 451 — ゼットゴールドEX 要約

- メーカー: **ネット**
- 型式: **ゼットゴールドEX3**
- 検定番号: **9S1211**
- 導入: **2010-02-21**（HAZUSE具体日。NET公式は2010年2月製品として整合）
- 世代: **5号機**
- システム: **ネオストック / アシストボーナス(ABナビ) / RT系**
- 機械割: **96.7 / 100.2 / 102.0 / 106.4 / 107.7 / 113.3%**
- Z-BONUS: 設定1/3/5 **1/57043**、設定2/4/6 **1/118332**
- Z-RUSH: **約1/65.5〜1/65.6**、ボーナス合算約**1/65.5**
- 50枚ベース: **約33.7G**
- Z-BONUS: **約221枚**
- Z-RUSH: **約27〜29枚**（資料差をCONFLICT保持）
- スーパーZゾーン/ABナビ連状態の比較用出玉速度: **約+2.2枚/G**
- 通常天井: **ボーナス間333G** または **ABナビ間W Z揃い20回**。到達時最低7ナビ以上。
- 天井時平均ナビ数（解析公開値）: 設定1〜6 **12.5 / 8.5 / 12.5 / 8.5 / 19.5 / 8.5個**。

## resetBehavior v0.7 — ゼットゴールドEX

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。333Gカウンタ、W Z揃い回数、ABナビストック、通常/Zゾーン/スーパーZゾーン状態の設定変更時処理を本機固有資料で確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。設定変更の逆から推定しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。天井進捗/ストック/状態処理の直接根拠なし。
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`。通常天井333G自体は確定するが変更/電断時clear/retainは未確認。
- **ceilingAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。設定変更専用短縮天井なしとは断定しない。
- **modeAfterReset / stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井の救済を設定変更恩恵と混同しない。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/液晶状態/天井挙動を再探索したが本機固有の高信頼根拠なし。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / 欠損

- Z-RUSH獲得: P-WORLD/旧解析 **約27枚**、パチマガスロマガ **約29枚**。平均せず範囲と出典を保持。
- 5号機クロニクルは同機項目内に別ゲーム性と思われる説明混入が見られるため、機械割系列一致の補助照合以外には使用しない。
- resetBehaviorの設定変更/据え置き/電断/変更判別は十分な再探索後も直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- NET公式: `https://www.net-fun.co.jp/product/page/6`
- HAZUSE: `https://hazuse.com/machine/pachislot/9S1211/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5812`
- パチスロ救急車: `https://www.eightbeat.com/slot99/kishu/sa_gyou/se/ZgoldEX/page_menu.html`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/145/a.php`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は本線451件目を確定・保存。スロ原人直後の最初のresetBehavior欠損実ファイルを安全に一意特定できるところまで完結しなかったため、性能コアや別機種を推測更新していない。
- 次回QAは実ファイル/時系列を再走査し、**スロ原人直後の最初のresetBehavior未収集機**を特定してから補完する。

## 次回再開地点

1. **recordCount 451 / chronologicalFrontier 2010-02-21**。
2. まず **2010-02-21同日群を最終監査**し、ゼットゴールドEXより同日内で未登録のパチスロがないか確認。
3. 次の具体日確認済み候補は **みどりのマキバオー 2010-02-22**。ただし2/21同日内の未処理を飛ばさない。
4. 2010年2月月内候補 `ビューティフルジョー`、`ピカ吾郎V2`、`バイオレントゾーン`、`列強伝`、`新世紀エヴァンゲリオン～魂の軌跡～`、`ハイハイ30`、`真田純勇士`、`哲也 新宿vs上野DX` 等は具体導入日へ落として最古から処理する。
5. 遡及QAはスロ原人直後の実ファイル順で最初のresetBehavior欠損機を特定し、既存 `COMPLETE_CORE` を不用意に崩さずreset QAだけ別管理で補完する。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
