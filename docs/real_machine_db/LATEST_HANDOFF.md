# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **743**
- latestMachineAdded: **パチスロ英雄伝説 空の軌跡 THE ANIMATION**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2013-06-17_eiyuu-densetsu-sora-no-kiseki-the-animation.md`
- chronologicalFrontier: **2013-06-17**
- frontierLatestExactDateMachine: **パチスロ英雄伝説 空の軌跡 THE ANIMATION**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-06-17_GROUP__NEXT_2013-07-01_TAIRYO_II_AFTER_06-18_TO_06-30_BOUNDARY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-06-17_hello-santa-ultimate-machinegun-version.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **742** / chronologicalFrontier **2013-06-17** / 06-17群OPEN。
- 06-17群の残対象 **パチスロ英雄伝説 空の軌跡 THE ANIMATION**をrepo重複確認後、743件目として追加。
- K-Navi/ALL7で06-17群のパチスロは **スナイパイ72 / ハローサンタ アルティメットマシンガンバージョン / パチスロ英雄伝説 空の軌跡 THE ANIMATION** の3機。全て登録済みとなったため **2013-06-17群CLOSED**。
- K-Navi 2013年6月導入カレンダーでは06-17が同月最後のパチスロ導入日。ALL7 2013年6月一覧とも整合。次の具体日候補はK-Navi機種ページで **2013-07-01「大漁II」（北電子）**を確認。

## 今回追加 — パチスロ英雄伝説 空の軌跡 THE ANIMATION

### identity / 性能コア

- manufacturer: **ニューギン**。
- releaseDate: **2013-06-17**。K-Navi、パチビーで一致。グリーンべると当時記事の6/16納品開始予定とも整合。
- systemType: **5号機 A+ART（ボーナス+継続率/ゲーム数上乗せ型ART）**。
- 正式型式名/検定番号は再探索後も今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 機械割: **97.0 / 98.8 / 101.4 / 105.7 / 109.3 / 114.2%**。
- ART初当たり: **1/389.1 / 378.0 / 367.9 / 348.6 / 338.4 / 264.6**。
- ボーナス合算: **1/399.6 / 394.8 / 390.1 / 385.5 / 381.0 / 372.4**。
- 50枚ベース: **平均約32G/1000円**（単一二次資料のため ANALYSIS_SINGLE）。
- ART「運命の軌跡」: **1セット33G+α / 純増約1.4枚/G / 継続率50～90%**。
- BIG: **約204枚**、REG: **約54枚**。
- 天井: **ボーナス間1400G**。
- ART当選/消化ではボーナス間天井G数はリセットされない。

### resetBehavior v0.7

- 2013-06-22当時の天井解析で **設定変更時にボーナス間天井G数リセット / 宵越し不可**を確認。`gameCounterReset.settingChange = CLEAR_CONFIRMED`。
- K-Navi機種ページには本機専用「設定変更後の挙動」解析導線が現存するが、今回本文取得は403。検索結果から内容を推定せず、直接確認できた天井Gリセットのみ確定扱い。
- 純据え置き時のボーナス間天井G・内部状態完全保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ON時契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部モード/高確状態再抽選や公開振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井/朝一ART優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶等による本機固有の確定変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更で前日のボーナス間天井進捗が消えることは朝一天井狙い上の不利要素として保持。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_BONUS_INTERVAL_CEILING_COUNTER_RESET_CONFIRMED__CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH**。

### conflicts

- ART基本1セット表記は、K-Navi/P-WORLD/グリーンべると当時記事が **33G+α**で一致。一方、pachislo-data基本情報欄に **40G+継続バトル**表記あり。平均化せず `CONFLICT_OR_DEFINITION_DIFFERENCE_33G_PLUS_ALPHA_VS_40G_PLUS_BATTLE` として保持し、本線は当時複数資料一致の33G+α。

## 2013-06-17同日群 / 次境界

- **スナイパイ72**（ネット）— 登録済み741件目。
- **ハローサンタ アルティメットマシンガンバージョン**（タイヨー）— 登録済み742件目。
- **パチスロ英雄伝説 空の軌跡 THE ANIMATION**（ニューギン）— 今回登録743件目。
- K-Navi 2013年6月導入カレンダーとALL7 2013年6月一覧で他の06-17パチスロを確認できないため **06-17群CLOSED**。
- 06-18～06-30はK-Navi月間カレンダー上、次のパチスロ全国一斉導入がない。次回は別系統資料でもこの境界を最終監査してから7月へ進む。
- 次の具体日候補: **2013-07-01「大漁II」（北電子）**。K-Navi機種ページで導入日を確認済み。

## 遡及resetBehavior QA 進捗

- 本線収集を優先。既存性能値は無駄に再調査していない。
- QAカーソルは既存方針を維持し、本線キューとは分岐しない。

## 次回再開地点

1. **recordCount 743 / chronologicalFrontier 2013-06-17 / 06-17群CLOSED** から開始。
2. **2013-06-18～06-30境界**を別系統の当時導入一覧/メーカー別一覧でも最終監査。
3. 追加がなければ **2013-07-01「大漁II」（北電子）**を744件目候補としてrepo重複確認 → 性能コア + resetBehavior v0.7を収集・保存。
4. 07-01同日群をK-Navi/ALL7/メーカー別資料で監査し、同日未処理機を順に継続。
5. 英雄伝説 空の軌跡の正式型式名/検定番号、据え置き/純電断、設定変更時内部状態、変更判別は後続QAで本機固有直接資料が見つかった場合のみ補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ英雄伝説 空の軌跡 THE ANIMATION

- K-Navi 機種トップ: `https://p-kn.com/slot/1867/`
- K-Navi 天井情報（導線確認、本文は今回403）: `https://p-kn.com/slot/1867/44815/`
- K-Navi 設定変更後の挙動（導線確認、本文は今回403）: `https://p-kn.com/slot/1867/45216/`
- K-Navi Q&A / ボーナス間天井はARTではリセットされない: `https://p-kn.com/community/question/slot/1867/125909/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7098`
- パチビー: `https://www.pachibee.jp/movies/index/9463`
- グリーンべると当時業界記事: `https://news.p-world.co.jp/articles/5854/greenbelt`
- 娯楽産業 2013-05-21内覧会記事: `https://www.goraku-sangyo.com/ニューギン%E3%80%80パチンコ＆パチスロ同時発表/`
- pachislo-data: `https://pachislo-data.com/newgin/soranokiseki`
- 目指せ月収20万 / 2013-06-22天井解析・設定変更: `https://mezase20.com/blog-entry-850.html`
- ALL7 2013年6月導入予定一覧: `https://www.all7.jp/plans/index/2013/06`
- K-Navi 2013年6月導入カレンダー: `https://p-kn.com/calendar/201306/`
- K-Navi 大漁II / 次候補導入日: `https://p-kn.com/slot/1879/`
