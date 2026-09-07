# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **865**
- latestRecordAdded: **真モグモグ風林火山2**（ネット）
- latestRecord: `docs/real_machine_db/machines/2015-02-02_shin-mogumogu-fuurinkazan2.md`
- chronologicalFrontier: **2015-02-02**
- frontierLatestMachine: **真モグモグ風林火山2**（ネット）
- schema: **resetBehavior v0.7**
- status: **2015-01-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2015-01-27_TO_2015-02-01_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2015-02-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.864 `2015-01-26_super-jackpot-across.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **864件 / chronologicalFrontier 2015-01-26 / 01-26_GROUP_OPEN**。
- 01/26同日群を再監査。実ホール導入の新規5号機としてスーパージャックポット以外を安全に固定できなかったため `2015-01-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- `トラッド` の2015-01-26は検定告示日資料が混入するため導入日として採用せず、ベルコ公式「2015年3月登場」を維持。
- 2015-01-27～02-01境界を具体日、メーカー、業界記事、導入一覧で再探索。ホール導入日として安全に固定できる未登録5号機を確認できず `BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH`。
- K-Navi 2015年2月導入カレンダーで02/02のパチスロ **真モグモグ風林火山2 / ニューパルサーデラックス** を確認。NET公式リリースでも真モグ2を2015-02-02全国導入予定と固定できたためNo.865として追加。

## No.865 — 真モグモグ風林火山2

- record: `docs/real_machine_db/machines/2015-02-02_shin-mogumogu-fuurinkazan2.md`
- manufacturer: **ネット**
- releaseDate: **2015-02-02**
- alternateName: **真モグモグ風林火山 弐の陣**
- modelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 AT / 50G周期CZ / ゲーム数上乗せ**

### 性能コア

- 機械割: **96.8 / 98.3 / 99.5 / 102.2 / 106.6 / 114.8%**。
- AT初当たり: **1/266 / 1/256 / 1/247 / 1/231 / 1/207 / 1/186**。
- 上記2系列はK-Naviとパチマガスロマガ旧DBで一致。旧DBではメーカー発表値表記。
- 50枚ベース: **32.1G/50枚**（パチマガスロマガ旧DB）。
- AT「覇業への道」純増: **約2.4枚/G**（NET発表会業界記事、P-WORLD、旧パチマガスロマガで一致）。
- 通常時は約50G周期で「モグラ叩き合戦」。最大 **15周期**でAT確定。
- AT初期ゲーム数は御褒美乱打で可変。固定獲得枚数として捏造せず、比較値は純増・周期構造を採用。

### resetBehavior v0.7

- 設定変更: **天井/周期進捗リセット、内部モード再抽選、内部状態再抽選、ステージ再抽選**。
- 周期日数・獲得領土も設定変更で再抽選。
- 据え置き: **周期日数・獲得領土・ステージを内部的に引継ぎ**。
- 純電源OFF→ON: **天井進捗・内部モード・内部状態・ステージを引継ぎ**という本機固有解析を確認。
- リセット後も最大15周期に到達し得るが、AT後より天井周期振り分けは若干浅めに優遇。
- 公開朝一数値: **設定1の10周期目当選率 約15%**（当時解析整理）。最深15周期が中心。
- 朝一実戦値: **454件**（新台初日1回目初当たり、設定不問）。大幅な0Gリセット狙い恩恵は観測されず、15周期到達例も複数。
- 変更判別: 前日最終ステージと朝一ステージ比較が材料。設定変更は再抽選、据え置きは引継ぎ。周期日数・獲得領土も補助材料。
- 本機固有ガックン契約: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- K-Naviには「モード移行率(設定変更時)」解析項目が存在することを確認したが、今回アクセス可能本文から完全数値表を安全に復元できず、推定転記しない。

## 2015-02-02群 — OPEN

処理済み:
- No.865 **真モグモグ風林火山2**（ネット）

未処理の強い同日候補:
- **ニューパルサーデラックス**（山佐） — K-Navi機種ページ/2015年2月導入カレンダーで2015-02-02ホール導入開始。

監査メモ:
- 02/02カレンダーには多数のパチンコも混在するためパチスロだけを対象にする。
- 真モグ2はNET公式2015-01-23リリースで「2月2日より全国に導入予定」と明記され、K-Naviのホール導入開始日と一致。
- 01/27～02/01は検索結果に発表日・記事投稿日・アプリ等が混じるため、実ホール導入を固定できないものは本線へ入れない。

## 次回再開地点

1. **recordCount 865 / chronologicalFrontier 2015-02-02 / 02-02_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.865 を再確認。
3. 次の未処理機種は **ニューパルサーデラックス（山佐、2015-02-02）**。
4. 性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/純電断/天井/モード/状態/朝一判別/公開数値を表記揺れ・型式名込みで再探索する。
5. ニューパルサーデラックス処理後、02/02同日群を全メーカー・当時導入一覧・業界記事で再監査し、追加なしを複数系統で確認できた場合のみ `CLOSED_FOR_CURRENT_RESEARCH`。
6. その後02/03以降を時系列監査。K-Naviの次の全国導入カレンダー上のパチスロ強アンカーは **2015-02-16 パチスロ アラジンAII**だが、02/03～02/15に地域先行・別日導入がないか必ず境界監査してから進む。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名4号機/2008年版/2019年版モグモグの値を2015年真モグ2へ混入させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### 真モグモグ風林火山2
- NET公式リリース（発売発表）: https://www.dreamnews.jp/press/0000103941/
- NET公式リリース（02/02全国導入予定）: https://www.dreamnews.jp/press/0000106265/
- K-Navi: https://p-kn.com/slot/2193/
- K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
- P-WORLD: https://www.p-world.co.jp/machine/database/7608
- P-WORLD / PiDEA業界記事: https://news.p-world.co.jp/articles/7071
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/c.php
- パチマガスロマガ AT初当たり/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/h.php
- パチマガスロマガ 機種INDEX: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/160/net_slot_160.php
- 期待値見える化 朝一リセット解析: https://slotjin.com/slot/mogumogu2-reset/
- イチカツ 朝一設定変更/据え置き: https://ichikatsu.com/sinmog2-asaiti/
- パチ7: https://pachiseven.jp/machines/4376/cutout/6

### 境界
- K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
- PiDEA 5号機設置期限表（検定告示日混同防止）: https://www.pidea.jp/articles/1620982702
- ベルコ公式 トラッド: https://www.s-bellco.co.jp/products/slot/yama_trad/
