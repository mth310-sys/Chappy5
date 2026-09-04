# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **617**
- latestMachineAdded: **キャッツ・アイ-恋ふたたび**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2011-11-07_cats-eye-koi-futatabi.md`
- chronologicalFrontier: **2011-11-07**
- frontierLatestExactDateMachine: **キャッツ・アイ-恋ふたたび**
- schema: **resetBehavior v0.7**
- status: **READY_TO_FINAL_AUDIT_2011-11-07_SAME_DAY_GROUP**

## 今回の本線追加 — キャッツ・アイ-恋ふたたび

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ストリートファイターIV」を再取得して開始。
- 開始時正本は **recordCount 616 / chronologicalFrontier 2011-11-07**。INDEXは旧19件地点のため、README規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の2011-11-07同日群次候補 **キャッツ・アイ-恋ふたたび** を処理。
- repo code searchで機種名未検出、想定パス `docs/real_machine_db/machines/2011-11-07_cats-eye-koi-futatabi.md` を直接fetchして404を確認して未登録と判断。
- K-Navi / HAZUSEは2011-11-07ホール導入、グリーンべると業界記事は2011-11-06納品開始予定。平均せず日付定義差として保持。
- オリンピア公式2011年発売機種一覧でも本機を確認。

### 性能コア

- 5号機 / ボーナス+ART / 完走型ストックART。
- 型式: **キャッツアイ恋ふたたびA**、検定番号: **1S0751**。
- 機械割: **97.1 / 98.8 / 100.1 / 104.1 / 106.8 / 113.0%**。
- BIG: **1/409.6 / 1/404.5 / 1/399.6 / 1/394.8 / 1/390.1 / 1/390.1**。
- ART初当たり: **1/398.3 / 1/370.9 / 1/362.9 / 1/304.0 / 1/282.3 / 1/216.0**。
- REG主系列: **1/612.5 / 1/606.8 / 1/601.2 / 1/590.4 / 1/580.0 / 1/580.0**。ただし精密分解系列と競合あり、平均せずレコード内保持。
- 50枚ベース: 設定別 **33.77 / 33.84 / 33.91 / 34.07 / 34.30 / 34.30G**。
- ART「キャッツ・タイム」: **1セット40G / 約+1.4枚/G**。
- BIG約**207枚**、REG約**45枚**。
- 天井: ボーナス間ハマリで段階変化。666〜998G間のボーナスで約5% ART、999〜1221GでART1〜3セット、1222〜1554GでART2〜3セット、1555G後SPエピソードART。
- coreStatus: **COMPLETE_CORE_WITH_CONFLICTS**。

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の7揃いpt」** と **「状態移行率(設定変更後)」** 解析項目が存在することを確認。
- パチ＆スロ必勝本でも **設定変更・ART終了後に状態移行抽選が行われる** と明記され、設定変更が内部状態へ作用することを別系統で照合。
- したがって `settingChangeBehavior` / `modeAfterReset` / `stateAfterReset` は「設定変更専用処理の存在」まで確定。
- ただし現存取得経路では設定変更後7揃いptの具体振り分け、設定変更直後の全状態初期振り分けを安全に回収できず、その数値はUNVERIFIED_AFTER_RESEARCH。
- `carryOverBehavior`: 据え置き時の天井進捗/7揃いpt/状態保持を直接確定できずUNVERIFIED_AFTER_RESEARCH。
- `powerCycleBehavior`: 単純電源OFF→ONの扱いを直接確定できずUNVERIFIED_AFTER_RESEARCH。
- `gameCounterReset`: 設定変更時に666/999/1222/1555G系天井カウンタがCLEAR/RETAINか直接確定できずUNVERIFIED_AFTER_RESEARCH。
- `ceilingAfterReset`: 設定変更専用7揃いpt処理の存在は確認したが、短縮天井G数はNONE_CONFIRMED_AFTER_RESEARCH。
- `resetDetection`: ガックン/初期出目/液晶/ゲーム数挙動による判別を本機固有資料で確定できずUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH**。

### CONFLICT / 定義差

1. REG確率はK-Navi/当時市場表系列と、パチマガスロマガh-1の赤REG+青REG精密分解系列で差があり、単なる丸めを超えるため `CONFLICT_REG_PROBABILITY_SERIES` として双方保持。
2. HAZUSEは設定5/6 REGを1/590.4と掲載し、K-Navi等の1/580.0系列とも差がある。
3. 導入日はホール導入2011-11-07と納品開始予定2011-11-06を定義分離。
4. 天井はP-WORLD/K-Naviの4段階詳細を主とし、一部ホール資料の999/1222/1555G簡略表記は粒度差として分離。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 617 / chronologicalFrontier 2011-11-07**から開始。
2. まず2011-11-07同日群を **K-Navi、HAZUSE新台カレンダー、メーカー別一覧、当時業界記事**で最終監査し、ストリートファイターIV / 必勝金閣寺物語～古都絢爛～ / キャッツ・アイ-恋ふたたび以外の未登録5号機がないか確認する。
3. 同日群に未登録が見つかれば、その最古候補を618件目として性能コア＋resetBehavior v0.7を処理。
4. 同日群を閉じられた場合は、HAZUSEカレンダー上の次日付群 **2011-11-11 → 2011-11-14** の順で最古未処理を探索する。11/21群へ飛ばさない。
5. 参考後続アンカー: **巨人の星V～汗と涙と根性編～（2011-11-21）**、**赤ドン雅（2011-11-21）**。ただし11/11・11/14・11/18・11/19群を閉じる前に処理しない。
6. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### キャッツ・アイ-恋ふたたび
- オリンピア公式2011年発売機種: `https://www.olympia.co.jp/official/products/2011.html`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4908/greenbelt`
- 娯楽産業: `https://www.goraku-sangyo.com/%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%82%A2%EF%BC%8F%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%AD%E3%83%A3%E3%83%83%E3%83%84%E3%83%BB/`
- K-Navi: `https://p-kn.com/slot/1506/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0751/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6500`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/a.php`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/c.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/h.php`
- パチマガスロマガ 精密分解: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/100/h-1.php`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1912/1/32044`
- パチ＆スロ必勝本 状態移行率: `https://p.hisshobon.jp/machine/1912/1/32053`

### 次回順序確認
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- **2011-11-07同日群の最終監査を先に実施し、その後11/11 → 11/14へ進む。**
