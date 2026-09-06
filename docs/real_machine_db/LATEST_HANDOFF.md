# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **850**
- latestRecordAdded: **パチスロ大海物語 with T-ARA**（三洋物産）— 2014-10-06
- latestRecord: `docs/real_machine_db/machines/2014-10-06_pachislot-ooumi-monogatari-with-t-ara.md`
- chronologicalFrontier: **2014-10-06**
- frontierLatestMachine: **パチスロ大海物語 with T-ARA**
- schema: **resetBehavior v0.7**
- status: **2014-10-06_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.849 `2014-10-06_pachislot-sangokushi.md` を再読。
- INDEXは旧集約状態（19件表示）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **849件 / 2014-10-06 / 10-06_GROUP_OPEN**。
- handoff指定の次未処理 No.850 **パチスロ大海物語 with T-ARA**を追加。
- machine record commit: `49d1d89ca834ea7826f8ecc78423cc4fe11fd9fc`。

## No.850 — パチスロ大海物語 with T-ARA

- record: `docs/real_machine_db/machines/2014-10-06_pachislot-ooumi-monogatari-with-t-ara.md`
- manufacturer: **三洋物産**。
- hall start: **2014-10-06**。K-Navi、パチビー、パチ7、必勝本で一致。グリーンべると2014-08-04記事も10/06納品開始予定。
- 型式名: **パチスロ大海物語KD**。数字形式検定番号は `UNVERIFIED_AFTER_RESEARCH`。
- system: **5号機 AT / ベルナビ回数管理 / 確変ループ + ST引き戻し**。
- AT初当たり: **1/199.50 / 1/192.98 / 1/184.64 / 1/158.47 / 1/150.79 / 1/141.48**。
- 機械割: **97.24 / 98.38 / 100.32 / 105.25 / 107.67 / 110.73%**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。実戦投稿の約30G/1k程度は物差し値として採用せず。
- AT純増: **約2.8枚/G**。
- チャンス図柄大当り: ベルナビ20回、約100枚目安。
- 確変図柄大当り: ベルナビ20回or40回、約100枚or約200枚目安。
- 確変「大海チャンス」: 55/75/85%継続率、保留5個以内の当選確定。
- ST「大海チャレンジ」: 5回、設定1引き戻し期待度約15%。

## resetBehavior v0.7 — パチスロ大海物語 with T-ARA

- 必勝本機種TOPに **「天井&設定変更→ナシ」** と明記。
- 通常ゲーム数天井: **非搭載**。
- 規定G数解除型の通常/天国モード: **NOT_APPLICABLE_NO_GAME_NUMBER_MODE_CONFIRMED**。
- gameCounterReset: **NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井/朝一天国/CZ優遇/公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の内部抽選状態: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なし純電源OFF→ON時の内部状態/表示: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/液晶による変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- ST引き戻し約15%はAT終了後の通常仕様であり、設定変更朝一値へ転記しない。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-10-06群 — OPEN

### 登録済み/重複禁止

- No.846 戦律のストラタス（高砂/KPE系）— 2014-09-29新潟先行。10/06全国稼働日で重複作成しない。
- No.847 バビロン with 桜丘ショコラ — 09-29/10-06日付CONFLICT管理済み。10/06に重複作成しない。
- No.848 シンデレラブレイド2（ネット）
- No.849 パチスロ三國志（ニューギン）
- No.850 パチスロ大海物語 with T-ARA（三洋物産）

### 同日未処理の強い候補

1. **龍が如く 見参！天照祇園編**（タイヨーエレック）

- ALL7の2014年10月一覧2ページ目に **2014/10/06導入予定**として掲載。
- 前回handoffの10/06候補列から漏れていたため、今回の同日群横断で検出。
- 次回は同機を最優先で処理し、その後10/06同日群をALL7全ページ、メーカー別一覧、K-Navi/パチ7/業界記事/古いDBで再監査する。
- 漏れがなければ `2014-10-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH` へ進め、10/07以降の境界監査を行う。
- ALL7の同月一覧では次の主要パチスロ日付アンカーとして **2014-10-20 スーパービンゴネオ / パチスロ バーストエンジェル** が確認できるが、10/07〜10/19の別ソース監査前に境界を閉じない。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`（トレジャーパイレーツ）。
- 新規本線を止めず、後続リレーで既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 大海物語 with T-ARAは「天井&設定変更→ナシ」を、内部状態まで不変という意味へ拡張しない。
- 50枚ベースはユーザー実戦投稿だけで確定しない。
- PiDEAの10/05納品予定と、10/06納品開始/ホール導入を同一定義としてCONFLICT化しない。releaseDateはホール導入の複数一致10/06。
- 戦律のストラタス10/06全国稼働、バビロン10/06代替日で重複レコードを作らない。
- 10/06群を閉じる前に **龍が如く 見参！天照祇園編**を必ず処理する。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 850 / chronologicalFrontier 2014-10-06 / 10-06_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.850を再確認。
3. 次の未処理は **龍が如く 見参！天照祇園編（タイヨーエレック）**。
4. 同機処理後、2014-10-06同日群を全メーカー横断で最終監査してCLOSED判定。
5. CLOSEDなら10-07〜10-19境界監査へ前進。ALL7上の次の主要アンカーは10/20。
6. 遡及QAは `2007-03-11_treasure-pirates.md` から再開。

## 主要出典 — 取得日 2026-09-07

### パチスロ大海物語 with T-ARA
- パチ＆スロ必勝本 機種TOP: `https://p.hisshobon.jp/machine/2464`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2464/1/48481`
- パチ＆スロ必勝本 設定看破: `https://p.hisshobon.jp/machine/list.php?c=1&d=48725&mid=2464&p=2`
- パチ＆スロ必勝本 システム概要: `https://p.hisshobon.jp/machine/2464/1/48360`
- パチ＆スロ必勝本 確変/ST: `https://p.hisshobon.jp/machine/2464/1/48391`
- グリーンべると: `https://news.p-world.co.jp/articles/6730/greenbelt`
- パチビー: `https://www.pachibee.jp/machines/index/214090006`
- K-Navi: `https://p-kn.com/slot/2109/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7492`
- PiDEA: `https://www.pidea.jp/articles/SANYO%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%A4%A7%E6%B5%B7%E3%80%8D%E3%81%AB%E3%83%86%E3%82%A3%E3%82%A2%E3%83%A9%E5%86%8D%E7%99%BB%E5%A0%B4%21`
- 中一商事 型式: `https://www.nakaiti.com/html/sayo0054.html`
- 後年実戦整理: `https://www.nikuziru.com/archives/964`

### 10-06同日群監査
- ALL7 2014年10月1ページ: `https://www.all7.jp/plans/index/2014/10`
- ALL7 2014年10月2ページ: `https://www.all7.jp/plans/index/2014/10/10`
