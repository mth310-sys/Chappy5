# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **867**
- latestRecordAdded: **パチスロ アラジンAII**（Sammy / サミー）
- latestRecord: `docs/real_machine_db/machines/2015-02-16_aladdin-a2.md`
- chronologicalFrontier: **2015-02-16**
- frontierLatestMachine: **パチスロ アラジンAII**（Sammy / サミー）
- schema: **resetBehavior v0.7**
- status: **2015-02-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_AUDIT_2015-02-17_TO_2015-02-22**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.866 `2015-02-02_new-pulsar-deluxe.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **866件 / chronologicalFrontier 2015-02-02 / 02-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 前handoff指定の **2015-02-03～02-15境界**を再監査。K-Navi 2015年2月導入カレンダーでは02/09はパチンコ新台のみでパチスロ候補なし。追加の具体日付き未処理5号機を安全に固定できず `2015-02-03_TO_2015-02-15_CLOSED_FOR_CURRENT_RESEARCH`。
- 次の未処理強アンカー **パチスロ アラジンAII** をNo.867として追加。
- K-Naviの02/16パチスロ新台は本機のみ。パチビー/HAZUSEでも2015-02-16導入で一致し、現時点で同日追加未処理機を固定できないため `2015-02-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## No.867 — パチスロ アラジンAII

- record: `docs/real_machine_db/machines/2015-02-16_aladdin-a2.md`
- manufacturer: **Sammy / サミー**
- releaseDate: **2015-02-16**
- alternateName: **アラジンA2 / アラジンAⅡ**
- modelName: **アラジンA II ZS**
- inspectionNumber: **4S0859**
- systemType: **5号機 AT / BR非搭載 / CZ搭載**

### 性能コア

- 機械割: **97.2 / 98.2 / 100.5 / 104.5 / 110.5 / 119.2%**。
- AT初当たり: **1/390.3 / 355.0 / 384.3 / 318.9 / 344.8 / 243.6**。
- 50枚ベース: **約28G/50枚**（HAZUSE実戦値。当時解析でも同値採用）。
- AT「アラジンチャンス」: **1セット50G+α / 純増約2.7枚/G**。
- アラジンボーナス: **30G / 純増約2.7枚/G**。
- CZ「試練の塔」AC期待度約50%、CZ「マジカルチャンス」約66%。
- 通常ゲーム数解除ゾーンは非搭載。
- 通常時天井: **AT間1400G+前兆 → アラジンボーナス**。

### resetBehavior v0.7

- 設定変更で **天井ゲーム数RESET**。
- リセット後も天井は **1400G+前兆**で通常時と同じ。固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の規定G朝一モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 当時解析では「朝一AT高確スタートの形跡なし」「通常と変わらずゾーンなし」とされ、明確なリセット恩恵は確認されない。
- 新装初日データのリセット後50G以内初当たり率 **3.4%** という実践集計あり。ただしメーカー解析値ではないため参考値としてのみ保持。
- 当時解析で **ガックンチェック有効**との記録あり。発生率・対策可否は未確認。
- 据え置き時の1400G天井カウンタ/内部状態引継ぎ、純電源OFF→ON時の天井・チェリ連状態・AC高確・液晶/リール復帰契約は、本機固有の直接資料を十分再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 欠損再探索

- 表記揺れ: `パチスロ アラジンAII / アラジンA2 / アラジンAⅡ / アラジンエース2 / アラジンA II ZS`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1400G / 高確 / チェリ連 / ガックン / リール / モード / ゾーン`。
- 資料系統: K-Navi、パチビー、P-WORLD、HAZUSE、当時攻略/解析ブログ、後年回顧資料。
- 4号機「アラジンA」、6号機「アラジンAクラシック」、パチスロ「アレジン」は別機種として除外。

## 2015-02-03～02-15境界 — CLOSED_FOR_CURRENT_RESEARCH

- K-Navi 2015年2月導入カレンダーで02/09はパチンコ新台のみ。
- 前後の具体日・当時導入一覧を再確認し、今回安全に追加できる未処理5号機を固定できなかった。
- 発表日・検定日・アプリ配信日・地域先行を全国ホール導入日と混同しない。

## 2015-02-16群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
- No.867 **パチスロ アラジンAII**（Sammy / サミー）

監査メモ:
- K-Navi 2015年2月導入カレンダーの02/16パチスロ候補は本機のみ。
- パチビー、HAZUSEでも2015-02-16導入で一致。

## 次回再開地点

1. **recordCount 867 / chronologicalFrontier 2015-02-16 / 02-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.867 を再確認。
3. **2015-02-17～2015-02-22境界監査**を具体日・地域先行・メーカー公式・当時業界記事・導入一覧で実施する。
4. 現時点の次の強い全国導入アンカーは **2015-02-23「ハナビ」（アクロス）**。ただし02/17～02/22に未処理5号機がないことを複数系統で確認してから処理する。
5. 2015年2月下旬には **スーパービンゴNEO-30（ベルコ）** が月次表記で存在するため、ハナビ処理後の境界監査で具体導入日/地域差を確定してから順序決定する。
6. 新規機では性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ・型式・メーカー/シリーズ名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、複数資料系統を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機・派生スペックを混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ アラジンAII
- K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
- K-Navi 機種情報: https://p-kn.com/slot/2191/
- パチビー: https://www.pachibee.jp/machines/about/215020000
- P-WORLD: https://www.p-world.co.jp/machine/database/7607
- HAZUSE 基本/天井: https://hazuse.com/machine/pachislot/4S0859/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0859/genre/201/
- 期待値見える化 天井/スペック: https://slotjin.com/zone/aladdina2/
- 期待値見える化 リセット実践値: https://slotjin.com/slot/aladdina2-reset/
- すろぱちくえすと 朝一設定変更: https://www.slopachi-quest.com/article/%E3%82%A2%E3%83%A9%E3%82%B8%E3%83%B3a2-%E6%9C%9D%E4%B8%80%E8%A8%AD%E5%AE%9A%E5%A4%89%E6%9B%B4%E3%83%BB%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E6%99%82%E3%81%AE%E6%81%A9%E6%81%B5%E3%83%BB%E6%8C%99/
