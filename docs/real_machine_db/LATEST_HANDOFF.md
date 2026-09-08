更新日: 2026-09-09

## 現在地点
- recordCount: **1048**
- latestRecordAdded: **ジャックポット トロピカルバージョン2**（岡崎産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-06_jackpot-tropical-version2.md`
- chronologicalFrontier: **2017-02-06**
- frontierLatestMachine: **ジャックポット トロピカルバージョン2 — No.1048**
- schema: **resetBehavior v0.7**
- status: **2017-02-06_GROUP_OPEN_PENDING_FINAL_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1047実レコードを再取得して開始。
- main正本は1047件 / 2017-02-06群OPEN、次カーソル「ジャックポットトロピカルバージョン2」。既存検索で未登録を確認後No.1048として追加。
- 性能コア＋resetBehavior v0.7を収集。50枚ベースと本機固有の物理的変更判別は検索語・資料系統を変えて再探索後も直接固定できずUNVERIFIED/NONE_CONFIRMEDで保持。
- 直前handoffの同日候補だった `パチスロ攻殻機動隊S.A.C. 2nd GIG` と `パチスロ機動戦士Zガンダム` は導入日を再照合し、2/6群候補から除外。前者は2017-03-21、後者は2017-04-03。

## No.1048 — ジャックポット トロピカルバージョン2
- manufacturer: **岡崎産業**
- releaseDate: **2017-02-06**
- formalModelName: **ジャックポットTPV2／J1**
- certificationNumber: **6S0723**
- generation/system: **5号機 / 5.5号機期 / ノーマルAタイプ / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_UNVERIFIED**

### performanceCore
- 機械割: **96.35 / 98.30 / 99.88 / 104.10 / 107.16 / 112.17%**。
- BIG: **1/303.41 / 293.88 / 284.94 / 268.59 / 255.00 / 234.06**。
- REG: **1/504.12 / 474.90 / 445.82 / 407.06 / 374.49 / 336.08**。
- 合算: **1/189.41 / 181.54 / 173.84 / 161.82 / 151.70 / 137.97**。
- BIG約**312枚** / REG約**130枚**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。小役確率から逆算せず直接値のみ採用する方針を維持。
- HAZUSEの精密表をcanonical。後年楽スロ記事のBIG設定3以降に大きな不一致があり、平均せず `CONFLICT_SOURCE_TABLE_SUSPECTED_TRANSCRIPTION_ERROR` として保持。

### resetBehavior v0.7
- 天井機能非搭載。通常ゲーム数天井、周期、AT/ART/CZ、ゲーム数解除モードは **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一高確、朝一専用モード、公開された主要恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電断で引き継ぐべき天井・周期・AT/ART/CZ進捗は非該当。
- ボーナス成立中等の特殊局面の純電断復帰は本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン、初期出目、ハイビスカス/7セグ表示による変更判別契約は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-02-06境界監査
- status: **OPEN_PENDING_FINAL_AUDIT**。
- 登録済み:
  - パチスロ牙狼-守りし者- — No.1044
  - JAWS ～it's a SHARK PANIC～ — No.1045
  - GⅠ優駿倶楽部 — No.1046
  - パチスロおそ松さん — No.1047
  - ジャックポット トロピカルバージョン2 — No.1048
- `パチスロ攻殻機動隊S.A.C. 2nd GIG`: **2017-03-21**。サミー公式は2017年3月中旬予定、HAZUSE/複数解析は3/21で一致。2/6群から除外し3月群で処理。
- `パチスロ機動戦士Zガンダム`: **2017-04-03**。SANKYOオンライン博物館は2017.04、複数解析は4/3で一致。2/6群から除外し4月群で処理。
- `マジンガーZ 新たな魔神の力`: 直前調査で2/20系列が優勢のため2/6群では早取りしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1048を再取得。
2. **1048件 / chronologicalFrontier 2017-02-06 / 2/6群OPEN_PENDING_FINAL_AUDIT** を正本として継続。
3. 2017-02-06同日について岡崎産業追加後の **全メーカー最終監査**を行い、未登録実機がなければ `2017-02-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH` にする。
4. 2/07以降を日付境界順に監査し、次の未処理全国導入機を確定してNo.1049候補へ進む。`攻殻機動隊S.A.C. 2nd GIG` は3/21、`機動戦士Zガンダム` は4/3なので時系列到達前に早取りしない。
5. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1048 ジャックポット トロピカルバージョン2
- HAZUSE: https://hazuse.com/machine/pachislot/6S0723/
- P-WORLD: https://www.p-world.co.jp/machine/database/8263
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/77/okazaki_slot_77.php
- 5号機クロニクル 岡崎産業: https://5goki.com/okazaki
- 楽スロ（BIG表CONFLICT確認用）: https://rakuslo.com/jackpot_tropical2-setteisamatome.html

### 日付候補訂正
- サミー公式 攻殻2発売告知: https://www.sammy.co.jp/japanese/news/2017/628.html
- HAZUSE 攻殻2: https://hazuse.com/machine/pachislot/6S1408/
- SANKYOオンライン博物館 Zガンダム: https://www.sankyo-fever.jp/collection/886/
- 一撃 Zガンダム: https://1geki.jp/slot/s_zgundam/
