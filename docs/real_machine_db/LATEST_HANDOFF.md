# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **529**
- latestMachineAdded: **アントニオ猪木が元気にするパチスロ機**（オリンピア / 2010-11-29）
- latestRecord: `docs/real_machine_db/machines/2010-11-29_antonio-inoki-genki.md`
- chronologicalFrontier: **2010-11-29**
- frontierLatestMachine: **アントニオ猪木が元気にするパチスロ機**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前528「サイボーグ009 THE CYBORG SOLDIER ～地上より永遠に～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **528** / chronologicalFrontier **2010-11-22**。
- 2010-11-22同日群と11/23～11/28境界を導入カレンダー・当時業界記事・K-Navi/P-WORLD/パチビー等で再監査。
- 次の強い具体的ホール導入日は **2010-11-29「アントニオ猪木が元気にするパチスロ機」**。repo内重複なしを確認し529件目として追加。
- 50枚ベース・型式/検定番号・resetBehavior欠損は機種名表記揺れ、猪木元気/新猪木、オリンピア、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等へ検索語を変更し、当時業界記事、P-WORLD、K-Navi、パチビー、パチマガスロマガ、パチ＆スロ必勝本、古い解析DB、回顧資料を横断してから判定。

## 529 — アントニオ猪木が元気にするパチスロ機

- メーカー: **オリンピア（平和グループ）**
- 世代/タイプ: **5号機 / A+ART / セットストック+ゲーム数上乗せART**
- 導入基準: **2010-11-29**（K-Navi・パチビー一致）
- 当時グリーンべると: **2010-11-28納品予定**。納品開始とホール導入を分離して保持。
- 機械割: **97.8 / 99.4 / 102.1 / 105.7 / 109.0 / 112.1%**
- BIG合算: **1/412 / 1/407 / 1/402 / 1/392 / 1/379 / 1/374**
- REG: **1/669 / 1/643 / 1/607 / 1/585 / 1/555 / 1/520**
- ボーナス合算: **1/251 / 1/245 / 1/238 / 1/232 / 1/222 / 1/215**
- ART初当たり: **1/824 / 1/761 / 1/670 / 1/572 / 1/519 / 1/479**
- ART「闘魂チャンス」: **30G+α / 約+1.3枚/G**
- 基本獲得: 赤7BIG **約300枚** / 青7BIG **約200枚** / REG **48枚** / PB **約16枚**
- 天井: **630G / 930G / 1230Gの3段階**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_VERIFIED**

### resetBehavior v0.7 — 猪木元気

- **設定変更で天井・ART関連・内部状態をリセット**。
- **設定変更後は低確&CZへ**。
- **設定変更なしの電源OFF→ONは全て引き継ぐ**とパチ＆スロ必勝本が明記。
- gameCounterReset: **RESET_ON_SETTING_CHANGE / RETAIN_ON_POWER_CYCLE**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。通常の630/930/1230G段階天井をゼロから数える。
- 第1天井630～929G: REG成立時 **1/3で1回以上の押し順ナビ**。
- 第2天井930～1229G: REG成立時 **1回以上の押し順ナビ確定**。
- 第3天井1230G以降: **ART確定**、REG成立時 **3回すべて押し順ナビ確定**。
- 第3天井ARTストック: **1個75% / 3個25%**。
- 朝一初REG「1/3でART」主張は低信頼二次資料で確認し、K-Naviにも朝一REG専用項目の存在を確認したが、高信頼本文を直接回収できなかったため主値化せず **LOW_CONFIDENCE_SECONDARY**。
- 設定変更判別（ガックン/初期出目等）: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **VERIFIED_CORE_WITH_ONE_LOW_CONFIDENCE_MORNING_CLAIM**。

## CONFLICT / 注意

- 5号機クロニクルの本機説明は「ボーナス非搭載・ART純増約2.0枚/G・闘魂RUSH50G」と複数当時資料に明白に反するため、**SERIES_MIXUP_OR_PAGE_DATA_ERROR**として説明値を不採用。機械割系列だけ照合補助に使用。
- 青BIGの規定払い出し枚数はパチマガスロマガ246枚 / P-WORLD264枚で差があるが、実獲得約200枚は一致。物差し主値は実獲得約200枚を採用し、規定払い出し値の差は定義/資料競合として保持。

## 主要出典 — 529（取得日 2026-09-04）

- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4196/greenbelt`
- K-Navi: `https://p-kn.com/slot/1297/`
- パチビー: `https://www.pachibee.jp/machines/lecture/210090012`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6126`
- パチ＆スロ必勝本「設定変更&天井情報」: `https://p.hisshobon.jp/machine/1682/1/27811`
- パチ＆スロ必勝本「通常時の状態」: `https://p.hisshobon.jp/machine/1682/1/27388`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/93/a.php`
- パチスロ救急車: `https://www.eightbeat.com/slot99/kishu/a_gyou/a/antonioINOKIgenki/page_menu.html`
- まじバナ（朝一初REG 1/3の低信頼補助資料）: `https://ameblo.jp/maji-bana/entry-11500259868.html`

## 今回のGitHub更新

- 529追加: `docs/real_machine_db/machines/2010-11-29_antonio-inoki-genki.md`
- machine record commit: `b4deb06bd4f34b848c016bcf3ac640589ad1d2a4`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時にmachine tree / commit履歴 / 実ファイル日付から怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 529 / chronologicalFrontier 2010-11-29**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-11-29同日群を最終監査**。同日未登録がなければ11/30～12/05の最古未処理を導入一覧・当時業界記事・K-Navi/P-WORLD/パチビー等で境界監査する。
3. 現時点の次の強い具体日アンカーは **2010-12-06「俺の空～蒼き正義魂～」**。11/30～12/05を閉じてから採用する。
4. その後の12月候補に **「緑ドン VIVA！情熱南米編」** 等があるが、時系列キューを飛ばさず12/06以降の最古未処理から進める。
5. 50枚ベースやresetBehaviorは、最初の検索で欠損扱いにせず、型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変えて複数系統を横断する。
6. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
