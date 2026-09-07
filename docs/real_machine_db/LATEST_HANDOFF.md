# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **860**
- latestRecordAdded: **パチスロ機動新撰組 萌えよ剣～今宵、花散る～**（北電子）— 2014-12-08の遡及漏れ補完
- latestRecord: `docs/real_machine_db/machines/2014-12-08_pachislot-kidou-shinsengumi-moeyo-ken-koyoi-hanachiru.md`
- chronologicalFrontier: **2014-12-15**
- frontierLatestMachine: **シーマスター ～ララ、旅立ちのプレリュード～**（山佐）
- schema: **resetBehavior v0.7**
- status: **2014-12-15_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2014-12-16_ONWARD**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.859 `2014-12-15_seamaster-lala-tabidachi-no-prelude.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **859件 / chronologicalFrontier 2014-12-15 / 12-15_GROUP_AUDIT_PENDING**。
- 12月同日/年次横断監査で、北電子 **「パチスロ機動新撰組 萌えよ剣～今宵、花散る～」** が未登録であることを検出。
- 同機は業界発表の納品予定 **2014-12-07** と、複数解析資料のホール導入 **2014-12-08** を分離し、No.860として遡及追加。chronologicalFrontierは2014-12-15のまま維持。
- 2014-12-15本体としては既登録の **パチスロ 蒼穹のファフナー / シーマスター ～ララ、旅立ちのプレリュード～** 以外を今回の複数系統監査で固定できなかったため、**2014-12-15_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.860 — パチスロ機動新撰組 萌えよ剣～今宵、花散る～

- record: `docs/real_machine_db/machines/2014-12-08_pachislot-kidou-shinsengumi-moeyo-ken-koyoi-hanachiru.md`
- manufacturer: **北電子**
- releaseDate: **2014-12-08**
- modelName: **萌えよ剣 今宵花散るTK**
- systemType: **5号機 A+ART / ボーナス+ART / 継続バトル**

### 導入日 / 同定

- 北電子公式製品ページで機種同定。
- グリーンべると2014-10-14記事は **2014-12-07から納品予定**。
- 複数の当時/後年解析資料は **2014-12-08ホール導入**。本DBでは納品日とホール導入開始日を分離し、12/08をcanonical。
- 型式名 **萌えよ剣 今宵花散るTK** は当時機種整理資料で確認。検定番号は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- 機械割: **97.7 / 98.7 / 100.2 / 102.5 / 105.0 / 109.4%**（旧パチマガスロマガ掲載のメーカー発表値）。
- ART「誠剣RUSH」初当たり: **1/392.3 / 376.9 / 375.6 / 320.5 / 310.3 / 261.3**（当時独自調査値）。
- 50枚ベース: **約31.74G/50枚**（旧パチマガスロマガ直接値）。
- ART: **1セット30G+継続バトル / 純増約1.5枚/G**。
- SPECIAL BIG **28枚** / BIG **203枚** / REG **42枚**。
- 第1天井: **ボーナス間932G+前兆 → ART確定**。
- 第2天井: **ボーナス間1432G+前兆 → ART + 妖撃乱舞確定**。

### resetBehavior v0.7

- 旧パチマガスロマガの本機専用メニューに **「朝イチ・設定変更」** ページが存在したことは確認。
- ただし本文を現行検索キャッシュから安全に復元できず、設定変更時の天井内部G、据え置き、純電源OFF→ON、低確/高確/超高確の処理を推定しない。
- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 設定変更/据え置き/power cycleとも `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: リセット専用短縮天井 `NONE_CONFIRMED_AFTER_RESEARCH`。
- mode/stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- resetDetection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- publicMorningNumbers: `NONE_CONFIRMED_AFTER_RESEARCH`。

### CONFLICT

- ボーナス合成・設定1: 当時詳細表 **1/278.9** vs 一部後年解析 **1/279.9**。平均せず保持。
- ボーナス合成・設定4: 当時詳細表 **1/253.0** vs 一部後年解析 **1/253.1**。平均せず保持。

## 2014-12-15群 — CLOSED_FOR_CURRENT_RESEARCH

- No.858 **パチスロ 蒼穹のファフナー**（SANKYO）— 処理済み。
- No.859 **シーマスター ～ララ、旅立ちのプレリュード～**（山佐）— 処理済み。
- 年次/12月監査で発見した北電子「萌えよ剣」は12/15機ではなく **12/08導入**としてNo.860へ遡及追加。
- HAZUSE系導入日、P-WORLD、当時業界記事、年次機種一覧を横断し、今回12/15本体として追加固定できる5号機はなし。

## 次回再開地点

1. **recordCount 860 / chronologicalFrontier 2014-12-15 / 12-15_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.860を再確認。
3. **2014-12-16以降の境界監査**へ進み、次の具体日付き未処理5号機を導入日順に特定する。
4. P-WORLD更新日・記事公開日・検定日・納品日だけを導入日と誤認しない。特に `トラッドザレジェンド` 等、12月中旬の検索結果に出る機種はホール導入日を別系統で固定してから登録する。
5. 2014年末に新規本体導入がなければ2014年境界をCLOSEDにして2015年最初の具体日付き未処理機へ進む。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは発表日・検定日・納品予定・全国導入・地域先行・実ホール導入を区別。
- 据え置き・純電断挙動は一般的な5号機の慣例から推定しない。
- 「朝イチ・設定変更」専用ページの見出しだけから、本文未復元の挙動を推測しない。
- 新パネル・検定日・撤去期限由来の日付だけの候補は新規本体導入日と混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ機動新撰組 萌えよ剣～今宵、花散る～
- 北電子公式: https://www.kitadenshi.co.jp/slot/moeyoken/
- グリーンべると: https://web-greenbelt.jp/00007309/
- P-WORLD: https://www.p-world.co.jp/machine/database/7544
- 旧パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/a.php
- 旧パチマガスロマガ 総合: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/kitac_slot_93.php
- 旧パチマガスロマガ ボーナス/ART/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/h-1.php
- 旧パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/c.php
- 旧パチマガスロマガ ARTフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/93/l.php
- スロパチクエスト: https://www.slopachi-quest.com/article/moeyo-ken2/
- 後年機種回顧: https://www.nikuziru.com/archives/1705
- 2014年機種資料/型式名: https://pachinko.hatenablog.jp/archive/2014
