# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **902**
- latestRecordAdded: **煩悩BREAKER禅**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-08-03_bonnou-breaker-zen.md`
- chronologicalFrontier: **2015-08-03**
- frontierLatestMachine: **煩悩BREAKER禅**
- frontierRecord: `docs/real_machine_db/machines/2015-08-03_bonnou-breaker-zen.md`
- schema: **resetBehavior v0.7**
- status: **2015-08-03_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.901 `2015-07-27_summer-jumbo.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **901件 / 2015-07-27 / 07-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- handoff指定どおり2015-07-28〜08-02境界を再監査し、その後08-03同日群へ進んだ。

## 2015-07-28〜2015-08-02境界 — CLOSED_FOR_CURRENT_RESEARCH

- 直前監査でK-Navi 2015年7月カレンダーは07/27までを確認済み。
- ALL7の2015年8月新台予定を再確認し、次の具体日付きパチスロ群は **2015-08-03**。
- 2015-07-28〜08-02にcanonical exact hall-start dayを置くべき未登録5号機を今回固定できなかったため、境界を **CLOSED_FOR_CURRENT_RESEARCH** とする。
- 08/02表記がある煩悩BREAKER禅は当時資料上の納品開始日であり、全国実ホール導入開始2015-08-03と分離した。

## No.902 — 煩悩BREAKER禅

- record: `docs/real_machine_db/machines/2015-08-03_bonnou-breaker-zen.md`
- manufacturer: **山佐**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- generation: **5号機**
- systemType: **AT / 疑似ボーナス連打型 / 旧基準AT**
- canonical releaseDate: **2015-08-03**

### identity / 導入日

- K-Naviはホール導入開始 **2015-08-03**。
- 山佐発表文転載と2015-08-03当日媒体も同日稼働/ホールデビューで一致。
- 当時資料の **2015-08-02**は納品開始日として分離し、canonicalは08-03。
- 正式型式名/検定番号は表記揺れ・型式/検定検索を含む再探索でも安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- ボーナス初当たり（設定1〜6）: **1/270.7 / 267.1 / 261.3 / 249.9 / 230.6 / 210.5**。
- PAYOUT（設定1〜6）: **97.2 / 98.9 / 100.1 / 103.0 / 107.2 / 112.0%**。
- 50枚ベース: **約30G**。
- 純増: **約3.0枚/G**。
- BIG: **約200枚** / REG: **約50枚**。
- 煩悩BASH: **1セット20G+α**のST型連チャン区間。
- 通常最大天井: **通常A 999G / 通常B 763G / 通常C・天国系 108G**。
- 精密初当たりと整数丸め表記は定義競合ではなく丸め差として処理。

### resetBehavior v0.7

- 後年の本機別天井整理資料で **設定変更時「リセット」** を確認。前日天井/規定G進捗を設定変更後もそのまま保持する契約とはしない。
- リセット専用の固定短縮天井、設定変更時モード振り分け、内部状態初期振り分けは十分な再探索後も固定できず `NONE_CONFIRMED_AFTER_RESEARCH` / `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井G/モード/状態の営業日跨ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の天井G/モード/状態: `UNVERIFIED_AFTER_RESEARCH`。
- ただし朝一最初のCZキャラ選択法則について、解析資料は **電源OFFでも適用される**と明記。
- 公開朝一CZキャラ振り分け:
  - 設定1: 千手55 / 救斎33 / 天音8 / ジョブツ4%
  - 設定2: 33 / 55 / 残り2欄 `UNVERIFIED_TABLE_RENDERING`
  - 設定3: 55 / 33 / 残り2欄 `UNVERIFIED_TABLE_RENDERING`
  - 設定4: 30 / 46 / 20 / 4%
  - 設定5: 45 / 23 / 20 / 12%
  - 設定6: 25 / 25 / 25 / 25%
- 設定2/3の欠損は100%から逆算していない。
- 本機固有のガックン/初期出目/ランプ等による変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 主なCONFLICT / 欠損

- `RELEASE_DATE_DEFINITION_2015_08_02_DELIVERY_VS_2015_08_03_HALL_START`。
- 正式型式名/検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断時の内部天井・モード・状態契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時のモード/状態具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一CZ設定2/3の一部キャラ値: `UNVERIFIED_TABLE_RENDERING`。

## 2015-08-03群監査 — OPEN

今回処理済み:
1. **煩悩BREAKER禅** — 山佐 — No.902。

同日未処理候補として確認:
1. **ガリンポ-30** — エマ。ALL7の08/03群に掲載。P-WORLDで5号機・ノーマル・30φの独立機種を確認済み。
2. **ジャッカスチーム** — 大都技研。K-Naviがホール導入開始2015-08-03を明記。
3. **パチスロストライクウィッチーズ** — オーイズミ。当時公式プロモ紹介/複数当時資料で2015-08-03全国導入開始を確認。

- ALL7の08/03欄にはパチンコも混在するため、種別を確認してパチスロのみ登録する。
- **2015-08-03_GROUP_OPEN**を維持し、上記3機を処理後に全メーカー横断で最終閉鎖監査する。

## 次回再開地点

1. **recordCount 902 / chronologicalFrontier 2015-08-03 / 08-03_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.902を再確認。
3. 08/03同日群の次候補 **エマ「ガリンポ-30」** を正式導入日・型式・独立機種性から確認して処理する。
4. 続いて **大都技研「ジャッカスチーム」**、**オーイズミ「パチスロストライクウィッチーズ」** を未登録確認後に処理する。
5. その後08/03群をK-Navi / ALL7 / メーカー・業界資料で再監査し、漏れがなければ `2015-08-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH` として次日へ進む。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ自動転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.902 煩悩BREAKER禅
- K-Navi: https://p-kn.com/slot/2288/
- オタク産業通信（メーカー発表文転載）: https://otakuindustry.biz/archives/9863
- Gamer 2015-08-03: https://www.gamer.ne.jp/news/201508030069/
- パチスロガイド: https://pachislot-guide.net/2015/bonnou-breaker/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/9602/
- スロ速: https://slosoku.com/archives/45031099.html
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/204/a.php
- パチマガスロマガフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/204/l.php
- 2ndsight天井一覧: https://2ndsight.xyz/1768
- ALL7 2015年8月: https://www.all7.jp/plans/index/2015/08/10

### 08/03残候補
- ガリンポ-30 P-WORLD: https://www.p-world.co.jp/machine/database/7791
- ジャッカスチーム K-Navi: https://p-kn.com/slot/2299/
- パチスロストライクウィッチーズ 当時公式プロモ紹介: https://p-media.info/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%82%B9%E3%83%88%E3%83%A9%E3%82%A4%E3%82%AF%E3%82%A6%E3%82%A3%E3%83%83%E3%83%81%E3%83%BC%E3%82%BA%EF%BC%88%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F%EF%BC%89/
