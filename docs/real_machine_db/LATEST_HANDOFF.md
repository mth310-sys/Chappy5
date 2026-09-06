# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **848**
- latestRecordAdded: **シンデレラブレイド2**（ネット）— 2014-10-06
- latestRecord: `docs/real_machine_db/machines/2014-10-06_cinderella-blade-2.md`
- chronologicalFrontier: **2014-10-06**
- frontierLatestMachine: **シンデレラブレイド2**
- schema: **resetBehavior v0.7**
- status: **2014-10-06_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.847 `2014-09-29_babylon-with-sakuragaoka-chocola.md` を再読。
- INDEXは旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **847件 / 2014-09-29 / 09-29_GROUP_CLOSED_FOR_CURRENT_RESEARCH_WITH_BABYLON_DATE_CONFLICT**。
- 2014-09-30〜10-05を導入カレンダー/当時記事で再監査し、今回安全に固定できる具体日付き未登録パチスロ機は確認できず `CLOSED_FOR_CURRENT_RESEARCH`。
- 2014-10-06群へ進み、No.848 **シンデレラブレイド2**を追加。
- machine record commit: `63df8f25046f1d7918b2cc722cc02a74b728d92b`。

## No.848 — シンデレラブレイド2

- record: `docs/real_machine_db/machines/2014-10-06_cinderella-blade-2.md`
- manufacturer: **ネット**。
- hall start: **2014-10-06**。K-Navi/アタリ7/ALL7で一致。NET公式プレスリリースは2014年10月上旬全国導入予定と告知。
- 型式名: **シンデレラ×ブレイド2ND**。数字形式検定番号は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- system: **5号機 AT / 32G周期抽選**。
- 機械割: **97.0 / 98.2 / 100.0 / 103.5 / 107.3 / 115.4%**。
- AT初当たり: **1/265 / 243 / 238 / 205 / 192 / 147**。
- base: **30.73G/50枚**。
- AT純増: **約2.3枚/G**。
- 武闘会: **30G以上**、初期G数はOPTで決定。
- 最大天井: **25周期**。ゲーム数換算は資料間で約875G〜約925Gの定義差があるため、固定Gへ平均せず25周期をcanonicalにした。

## resetBehavior v0.7 — シンデレラブレイド2

- 設定変更時は**天井周期進捗RESET + 設定変更専用の天井周期振り分けを再抽選**。
- リセット専用振り分け（全設定共通解析値）:
  - 1〜4周期 各1%
  - 5周期 15%
  - 6〜9周期 各1%
  - 10周期 25%
  - 11〜14周期 各2%
  - 15周期 25%
  - 16〜19周期 各1%
  - 20周期 10%
  - 21〜25周期 各1%
- 累積天井到達率: **5周期まで19% / 10周期まで48% / 15周期まで81% / 20周期まで95%**。
- 天井周期到達時は**レイラOPT**。解析では最低30G保証、継続率95〜99%。
- 2014年の朝一設定変更実践値300件でも5・10・15・20周期への当選集中が観測され、解析公開前の実戦観測と方向性が一致。ただし実践値と解析値は平均しない。
- 据え置き時の周期/剣ポイント/内部クリアポイント全契約、設定変更なし単純電源OFF→ON、設定変更時の内部状態/初期ステージ、本機2固有のガックン等確定判別は、表記揺れ・型式名・シリーズ名と検索語を変えて再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH`。
- 初代シンデレラブレイドの「電源切入は前日のまま」情報は別機種のため転記していない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-10-06群 — OPEN

### 登録済み/重複禁止

- No.848 シンデレラブレイド2（ネット）
- 戦律のストラタス: 2014-09-29新潟先行としてNo.846登録済み。10/06全国稼働日はメタデータであり重複作成しない。
- バビロン(with桜丘ショコラ): No.847で09-29/10-06日付CONFLICT管理済み。10/06に重複作成しない。

### 同日未処理の強い候補

1. **パチスロ三國志**（ニューギン）
2. **パチスロ大海物語with T-ARA**（三洋物産）

- ALL7の2014年10月導入一覧は上記2機とシンデレラブレイド2を10/06群として掲載。
- 大海物語with T-ARAはK-Navi/パチビーでも2014-10-06導入、2014-08-04グリーンべると記事は10月6日より納品開始予定とする。
- 10/06群はまだ **OPEN**。上記2機処理後に全メーカー横断で再監査してCLOSED判定する。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`（トレジャーパイレーツ）。
- 新規本線を止めず、後続リレーで既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 戦律のストラタス10/06全国稼働、バビロン10/06代替日で重複レコードを作らない。
- シンデレラブレイド2の最大天井を約875G/約925Gの平均値へ変換しない。canonicalは25周期。
- 初代シンデレラブレイドの据え置き/電断情報を2へ流用しない。
- 純電断契約を据え置き一般論から推定しない。
- P-WORLD等の最終更新日を導入日に使わない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 848 / chronologicalFrontier 2014-10-06 / 10-06_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.848を再確認。
3. 次の未処理は **パチスロ三國志（ニューギン）**。
4. 続いて **パチスロ大海物語with T-ARA（三洋物産）**。
5. 2機処理後、2014-10-06同日群をメーカー/業界/古いDBで最終監査してCLOSED判定し、10-07以降へ前進。
6. 遡及QAは `2007-03-11_treasure-pirates.md` から再開。

## 主要出典 — 取得日 2026-09-07

### シンデレラブレイド2
- NET公式プレスリリース（DreamNews転載）: `https://www.dreamnews.jp/press/0000097453/`
- K-Navi: `https://p-kn.com/slot/2116/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7403`
- パチマガスロマガ 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/159/c-1.php`
- ちょんぼりすた: `https://chonborista.com/slot/net-slot/3448/`
- アタリ7: `https://www.atari7.com/slot/date1426485017.php`
- スロパチクエスト reset: `https://www.slopachi-quest.com/article/cinderella-blade2-reset/`
- スロパチクエスト zone/reset解析: `https://www.slopachi-quest.com/article/cinderella-blade2-zone2/`
- ALL7 2014年10月: `https://www.all7.jp/plans/index/2014/10`

### 10/06境界/次候補
- パチビー 大海物語with T-ARA: `https://www.pachibee.jp/machines/index/214090006`
- K-Navi 大海物語with T-ARA: `https://p-kn.com/slot/2109/`
- グリーンべると 大海物語with T-ARA発表: `https://news.p-world.co.jp/articles/6730/greenbelt`
