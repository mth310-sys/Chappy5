# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **901**
- latestRecordAdded: **サマージャンボ ～あの夏のチケットの行方～**（JPS）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-27_summer-jumbo.md`
- chronologicalFrontier: **2015-07-27**
- frontierLatestMachine: **サマージャンボ ～あの夏のチケットの行方～**
- frontierRecord: `docs/real_machine_db/machines/2015-07-27_summer-jumbo.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.900 `2015-07-21_mensore-25.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **900件 / 2015-07-21 / 07-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- handoff指定どおり2015-07-22〜07-26境界を短く再監査後、07-27群へ進んだ。

## 2015-07-22〜2015-07-26境界 — CLOSED_FOR_CURRENT_RESEARCH

- K-Navi 2015年7月導入カレンダーでは07/21の次の全国一斉導入開始日は **07/27**。
- ALL7の2015年7月新台導入予定でも07/21の次の具体日付きパチスロは **07/27**。
- 現時点で07/22〜07/26にcanonical exact dayを置くべき未登録5号機を固定できなかったため、境界を **CLOSED_FOR_CURRENT_RESEARCH** とする。

## No.901 — サマージャンボ ～あの夏のチケットの行方～

- record: `docs/real_machine_db/machines/2015-07-27_summer-jumbo.md`
- manufacturer: **JPS（ジェイピーエス）**
- formalModelName: **サマーあの夏のチケットの行方ジャンボAA**
- inspectionDateTokyo: **2015-06-15**
- generation: **5号機**
- systemType: **AT / 新基準高ベースAT / 特殊設定0搭載**
- canonical releaseDate: **2015-07-27**

### identity / 導入日

- K-Naviは2015-07-27の全国一斉導入開始パチスロとしてJPS「サマージャンボ ～あの夏のチケットの行方～」を掲載。
- ALL7も2015-07-27導入予定。
- PiDEAの2015-06-05機械説明会記事は **2015-07-26納品予定**。納品日と実ホール導入日を分離し、canonicalは07-27。
- 型式名はPiDEA・後年の業界リストで **サマーあの夏のチケットの行方ジャンボAA** と一致。

### 性能コア

- 設定構成: **0 / 1 / 2 / 4 / 5 / 6**。通常設定3なし。設定0は特殊設定だが性能詳細は `UNVERIFIED_AFTER_RESEARCH`。
- AT初当たり（設定1/2/4/5/6）: **1/307.1 / 292.6 / 250.2 / 213.9 / 195.2**。
- PAYOUT（設定1/2/4/5/6）: **95.74 / 97.13 / 99.94 / 103.23 / 108.48%**。
- 純増: **約2.6枚/G**をcanonical。PiDEA/P-WORLD/パチマガスロマガ一致。一部約2.5枚表記は丸め差候補としてCONFLICT保持。
- AT基本性能: カウントダウンサマー **7G** / ジャンBONUS **33G以上** / BIGジャンBONUS **111G以上**。
- ハッピーチケット: 3枚 **33%** / 4枚 **66%** / 5枚 **100%**でGOGO SUMMERチャレンジ成功期待度。
- 第一天井: **AT後799G、50%でAT**。
- 第二天井: **AT後1499G、AT当選+初期G/振り分け優遇**。
- 50枚ベースは **PiDEA・スロット日報 約52G/50枚 vs ちょんぼりすた 約48G/50枚** のため `CONFLICT_BASE_GAMES_PER_50_52_VS_48`。平均化していない。

### resetBehavior v0.7

- 後年整理資料pacnkに **「設定変更後は天井ゲーム数が再抽選」** との記録あり。
- ただし再抽選後の具体G数/振り分け、固定のリセット専用短縮天井は公開値を固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き時のAT間天井G数、ハッピーチケット、内部状態の営業日跨ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の天井G・チケット・内部状態・表示/リール初動も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時モード振り分け、朝一専用モード、朝一特定G以内当選率、リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン/初期出目/表示/ランプによる変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 通常遊技中の「チケット引継ぎ」表記を据え置き朝一契約と誤読しない。

### 主なCONFLICT

- `CONFLICT_BASE_GAMES_PER_50_52_VS_48`。
- `CONFLICT_MINOR_PAYOUT_SETTING6_108_48_VS_108_4_108_5`。
- `CONFLICT_NET_INCREASE_2_6_VS_2_5`。
- `RELEASE_DATE_DEFINITION_2015_07_26_DELIVERY_VS_2015_07_27_HALL_START`。

## 2015-07-27群監査 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **サマージャンボ ～あの夏のチケットの行方～** — JPS — No.901。

監査結果:
- K-Navi 2015年7月カレンダーの07/27パチスロは **サマージャンボ ～あの夏のチケットの行方～** の1機種。
- ALL7の07/27候補は **サマージャンボ** とパチンコの **ルパン三世 I'm a super hero**。パチスロ対象はサマージャンボのみ。
- 07/27に追加すべき別未登録5号機を今回の横断再探索で固定できなかったため、**2015-07-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 次境界 / 次回候補

- まず **2015-07-28〜2015-08-02境界**を短く監査する。
- その後 **2015-08-03同日群**へ進む。
- 現時点でK-Navi個別ページから確認できる強い08/03候補:
  1. 山佐 **「煩悩BREAKER禅」** — ホール導入開始2015-08-03。
  2. 大都技研 **「ジャッカスチーム」** — ホール導入開始2015-08-03。
- 08/03群はこの2機だけと決め打ちせず、開始時にK-Navi/ALL7/メーカー横断で全候補を洗ってから順番に処理する。

## 次回再開地点

1. **recordCount 901 / chronologicalFrontier 2015-07-27 / 07-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.901を再確認。
3. **2015-07-28〜08-02境界を短く再監査**。追加がなければCLOSED化。
4. **2015-08-03同日群**を全メーカー横断監査。
5. 最初の強い候補は山佐 **「煩悩BREAKER禅」**、大都技研 **「ジャッカスチーム」**。導入順/同日順は資料で確定後に処理。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ自動転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### No.901 サマージャンボ
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- ALL7 2015年7月: https://www.all7.jp/plans/index/2015/07
- PiDEA X 2015-06-05: https://www.pidea.jp/articles/JPS%E3%80%8C%E3%82%B5%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%80%8D%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%81%AB%E7%B6%9A%E3%81%8F%E6%A9%9F%E7%A8%AE%E7%99%BA%E8%A1%A8
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/32/a.php
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/32/h.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7756
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/10479/
- すろぱちくえすと: https://www.slopachi-quest.com/article/%E3%82%B5%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C-%E5%A4%A9%E4%BA%95/
- pacnk: https://pacnk.com/slot/tools/sh_summerjumbo.html
- 福岡県遊協掲載PDF: https://www.fukuoka-yukyo.jp/60011948/wp-content/uploads/2019/11/201710121615441139.pdf

### 次回候補
- 煩悩BREAKER禅 K-Navi: https://p-kn.com/slot/2288/
- ジャッカスチーム K-Navi: https://p-kn.com/slot/2299/
