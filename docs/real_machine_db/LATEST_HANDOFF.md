# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **528**
- latestMachineAdded: **サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～**（アビリット / 2010-11-22）
- latestRecord: `docs/real_machine_db/machines/2010-11-22_cyborg-009-the-cyborg-soldier.md`
- chronologicalFrontier: **2010-11-22**
- frontierLatestMachine: **サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前527「エピソードドライブ」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **527** / chronologicalFrontier **2010-11-15**。
- 2010-11-15同日群を再監査し、11/16以降の導入日資料を横断。パチビーで **2010-11-22「サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～」** の具体導入日を確認し、repo未登録のため528件目として追加。
- 50枚ベースとresetBehavior欠損は表記揺れ、型式`サイボーグ009V`、メーカー`アビリット/TAKASAGO`、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/ガックン等へ検索語を変更し、P-WORLD、パチビー、パチマガスロマガ、K-Navi、pacnk、5号機クロニクル、当時業界記事を横断してから判定。

## 528 — サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～

- メーカー: **アビリット（現コナミアミューズメント）**
- 型式: **サイボーグ009V**
- 検定番号: **0S0774**
- 世代/タイプ: **5号機 / A+ART / 上乗せART / 無限ART**
- 導入基準: **2010-11-22**（パチビー）
- 機械割: **94.71 / 97.76 / 102.04 / 106.42 / 111.58 / 117.40%**
- ボーナス合算: **1/102.4 / 1/100.5 / 1/98.7 / 1/96.9 / 1/95.0 / 1/92.8**
- ART初当たり: **1/504.40 / 1/482.00 / 1/444.40 / 1/432.10 / 1/393.60 / 1/340.80**（pacnk単一整理値）
- BIG: **約230枚**、サイバーバトル/全員集合チャンス: **最大36枚**
- ART「アクセラレーションモード」: **50G+α / 約+1.6枚/G**
- 無限ART「スーパーアクセラレーションモード」: **次回ボーナスまで / 約+1.6枚/G**
- ゲーム数天井: **ボーナス&ART間777G → 無限ART**
- ART非当選ボーナス回数天井: **1～15回、MAX15回**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — サイボーグ009

- **設定変更で777Gゲーム数天井とART非当選ボーナス回数天井をリセット**（pacnk）。
- **設定変更後は1/2＝50%で高確以上からスタート**（P-WORLD）。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。通常777Gをゼロから数える。
- 据え置き時の777G/スルー回数/内部状態/ART権利保持: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の挙動から逆算していない。
- 単純電源OFF→ON時の777G/スルー回数/内部状態/ART権利: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一恩恵: **50%で高確以上スタート**。
- 朝一不利: **設定変更で前日までの777G天井進捗・スルー回数天井進捗が消失**。
- ガックン/初期出目等の確定的変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## CONFLICT

- 全員集合チャンス設定2: **P-WORLD 1/689.9 / 5号機クロニクル 1/689.2**。平均せず双方保持。
- 機械割のP-WORLD精密値と5号機クロニクル丸め値は丸め差として整合。
- メーカーは当時資料でアビリット、現行P-WORLDで承継先コナミアミューズメント。会社表記の時代差として保持し数値CONFLICTにはしていない。

## 主要出典 — 528（取得日 2026-09-04）

- パチビー: `https://www.pachibee.jp/movies/index/3478`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6119`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/26/a.php`
- pacnk: `https://pacnk.com/slot/tools/sh_9.html`
- 5号機クロニクル: `https://5goki.com/konami`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4179/greenbelt`
- K-Navi: `https://p-kn.com/slot/1291/`

## 今回のGitHub更新

- 528追加: `docs/real_machine_db/machines/2010-11-22_cyborg-009-the-cyborg-soldier.md`
- machine record commit: `3de428a47ab9b0d57bc56b0f629d602fc34a50f4`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時にmachine tree / commit履歴 / 実ファイル日付から怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 528 / chronologicalFrontier 2010-11-22**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-11-22同日群を最終監査**。同日未登録がなければ11/23～11/28の最古未処理を導入一覧・当時業界記事・K-Navi/P-WORLD/パチビー等で境界監査する。
3. 現時点の次の強い具体日アンカーは **2010-11-29「アントニオ猪木が元気にするパチスロ機」**。11/23～28を閉じてから採用する。
4. 50枚ベースやresetBehaviorは、最初の検索で欠損扱いにせず、型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変えて複数系統を横断する。
5. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
