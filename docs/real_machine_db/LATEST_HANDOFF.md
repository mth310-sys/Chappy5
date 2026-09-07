# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **859**
- latestRecordAdded: **シーマスター ～ララ、旅立ちのプレリュード～**（山佐）— 2014-12-15
- latestRecord: `docs/real_machine_db/machines/2014-12-15_seamaster-lala-tabidachi-no-prelude.md`
- chronologicalFrontier: **2014-12-15**
- frontierLatestMachine: **シーマスター ～ララ、旅立ちのプレリュード～**
- schema: **resetBehavior v0.7**
- status: **2014-12-15_GROUP_AUDIT_PENDING / NEXT_BOUNDARY_2014-12-16_ONWARD**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.858 `2014-12-15_pachislot-soukyuu-no-fafner.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **858件 / chronologicalFrontier 2014-12-15 / 12-15_GROUP_OPEN / 次候補シーマスター**。
- No.859として **シーマスター ～ララ、旅立ちのプレリュード～** を登録。

## No.859 — シーマスター ～ララ、旅立ちのプレリュード～

- record: `docs/real_machine_db/machines/2014-12-15_seamaster-lala-tabidachi-no-prelude.md`
- manufacturer: **山佐**
- releaseDate: **2014-12-15**
- modelName: **シーマスター2GG**
- inspectionNumber: **3S1138**
- systemType: **5号機 AT / CZ / レア役確変 / ゲーム数天井**

### 導入日 / 同定

- HAZUSE DATA、パチビー、当時解析が **2014-12-15導入開始** で一致。
- 山佐発表を報じたグリーンべると/娯楽産業は **12月14日納品予定 / 12月中旬ホールデビュー**。本DBでは納品日とホール導入開始日を分離し、12/15をcanonical。
- 公安委員会告示転載で **シーマスター2GG / 第3S1138号** を確認。

### 性能コア

- AT初当たり: **1/237.1 / 226.3 / 210.8 / 195.8 / 171.6 / 146.8**。
- 機械割: **96.9 / 98.4 / 101.6 / 104.8 / 108.5 / 113.5%**。
- 50枚ベース: **約31G/50枚**（当時販売スペック系。独立高信頼直接値は未固定のため信頼度を分離）。
- AT「シーマスターRUSH」: **1セット50G+α / 純増約2.2枚/G**。
- 通常天井: **AT間931G+前兆 → AT確定**。
- 複数当時解析で、天井到達時 **50%で引き戻しモード移行**。

### resetBehavior v0.7

- 当時解析で **設定変更時は天井までのゲーム数RESET** を確認。
- 固定リセット短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 後年回顧資料に **設定変更時は高確スタートの場合あり** とあるが、具体振り分け/当時一次値は今回固定できず `UNVERIFIED_PERCENTAGE_AFTER_RESEARCH`。
- 据え置き時のAT間G数・状態の直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用ゲーム数モード/公開朝一当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン/表示変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 資料汚染 safeguard

- 5号機クロニクルの本機項目は機械割系列のみ一致する一方、**導入日2013年12月 / 純増2.8枚/G / 別ゲーム性** が混入しているため、その部分は採用しない。
- canonicalは **2014-12-15 / 純増2.2枚/G / シーマスターRUSH**。

## 2014-12-15群 — AUDIT_PENDING

- No.858 **パチスロ 蒼穹のファフナー**（SANKYO）— 処理済み。
- No.859 **シーマスター ～ララ、旅立ちのプレリュード～**（山佐）— 処理済み。
- HAZUSE日付検索・一般新台検索では今回これ以外の具体日付き12/15導入5号機本体を固定できなかったが、検索結果がパチンコ機を多く含み完全横断性を保証できないため、群CLOSEDは次リレーの最終監査後に判定する。
- `スーパーラクラクビスカス` / `ゴーゴージャグラー` 等の12/15表記は検定期限・撤去期限由来の資料が混入し得るため、2014-12-15ホール導入機として自動採用しない。

## 次回再開地点

1. **recordCount 859 / chronologicalFrontier 2014-12-15 / 12-15_GROUP_AUDIT_PENDING** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.859を再確認。
3. 2014-12-15同日群を、HAZUSE導入日順、P-WORLD旧新台、当時業界月次、新台カレンダー、メーカー別一覧で最終横断監査。
4. ファフナー/シーマスター以外の5号機本体がなければ **2014-12-15_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。
5. その後 **2014-12-16以降の境界監査**へ進み、次の具体日付き未処理機を導入日順に登録する。発表日・検定日・納品日だけの候補はホール導入日と分離する。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは発表日・検定日・納品予定・全国導入・地域先行・実ホール導入を区別。
- 据え置き・純電断挙動は一般的な5号機AT機の慣例から推定しない。
- シーマスターの「設定変更時高確スタートの場合あり」は具体率未固定なので数値化しない。
- シーマスターの5号機クロニクル記述は別機種情報混入があるため、機械割以外をcanonical化しない。
- 新パネル・検定日・撤去期限由来の日付だけの候補は新規本体導入日と混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### シーマスター ～ララ、旅立ちのプレリュード～
- HAZUSE DATA: https://data.hazuse.com/?genre=202&machine_code=3S1138
- P-WORLD: https://www.p-world.co.jp/machine/database/7579
- グリーンべると: https://web-greenbelt.jp/00007409/
- 娯楽産業: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E3%80%8C%E3%82%B7%E3%83%BC%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC-%E3%80%9C%E3%83%A9%E3%83%A9%E3%80%81%E6%97%85%E7%AB%8B%E3%81%A1%E3%81%AE%E3%83%97%E3%83%AC%E3%83%AA%E3%83%A5/
- 旧パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/200/a.php
- 旧パチマガスロマガ 確率表: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/200/h.php
- スロパチクエスト: https://www.slopachi-quest.com/article/sea-master2-slot/
- 期待値見える化: https://slotjin.com/zone/seamaster/
- パチビー: https://www.pachibee.jp/machines/index/214110000
- 公安委員会告示転載: https://manualzilla.com/doc/6687088/h26.11.6%EF%BC%8826%E5%B9%B410%E6%9C%88%E4%B8%AD%EF%BC%89
- 当時販売スペック整理: https://ameblo.jp/slostar/entry-11950908596.html
- パチ7回顧: https://pachiseven.jp/articles/detail/10840
- 山佐ネクスト楽曲公式: https://yamasa-next.co.jp/music-distribution/sm2/
