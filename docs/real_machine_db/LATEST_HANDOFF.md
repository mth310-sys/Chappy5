# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **546**
- latestMachineAdded: **サムライチャンプルー極**（ニューギン / 2011-01-31）
- latestRecord: `docs/real_machine_db/machines/2011-01-31_samurai-champloo-kiwami.md`
- chronologicalFrontier: **2011-01-31**
- frontierLatestMachine: **サムライチャンプルー極**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線レコード `2011-01-31_rakuraku-onsenki.md` を再取得して開始。
- 開始時正本は **recordCount 545 / chronologicalFrontier 2011-01-31**。
- 指示どおり2011-01-31同日群を再監査。
- K-Naviで `サムライチャンプルー極` の**2011-01-31ホール導入開始**を確認。当時グリーンべるとは**2011-01-30納品開始予定**で、納品/ホール導入の定義を分離。
- repo code searchで未登録を確認したため同日漏れとして追加。
- 追加後 recordCount **546**、chronologicalFrontierは**2011-01-31維持**。

## 今回追加 — サムライチャンプルー極

- メーカー: **ニューギン**
- 導入: **2011-01-31**
- タイプ: **5号機 / A+ART / ゲーム数上乗せ+セットストック / CZ**
- 機械割: **96.2 / 98.8 / 101.5 / 104.6 / 110.2 / 119.1%**
- BIG: **1/399.61 → 1/321.25**
- REG: **1/655.36 → 1/520.13**
- ボーナス合算: **1/248.24 → 1/198.59**
- ART「斬モード」初当たり: **1/354 → 1/221**
- baseGamesPer50: **32.24 / 32.27 / 32.29 / 32.33 / 32.37 / 32.43G**
- BIG約**214枚** / REG約**48枚**
- 斬モード: **50G+α / 約+1.2枚/G**
- 天井: **ボーナス間1200G → 前兆後に斬モード**
- 天井到達時ストック: **1個92% / 2個8%**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — サムライチャンプルー極

- K-Naviに本機専用の**「設定変更後の挙動」**および**「状態移行率(設定変更時)」**解析項目が存在することを確認。
- パチマガスロマガにも**「朝イチ・設定変更」**専用項目が存在。
- ただし取得できた検索キャッシュ/公開本文では個別の設定変更時数値まで展開できず、**天井1200G進捗のCLEAR/RETAIN、設定変更時状態振り分け、据え置き、電源OFF→ON、ガックン/初期出目**は推測せず `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井1200Gは確定。
- advantageousSectionReset: **NOT_APPLICABLE**。
- 朝一専用の具体的短縮天井/優遇率/不利数値は今回確定できず。

### CONFLICT / 定義分離 — サムライチャンプルー極

- K-Navi機種概要の極モード「1ゲーム毎の期待値約2.4枚」と、P-WORLD/パチビー/当時業界記事のART純増**約1.2枚/G**は定義が同一と確認できないため平均せず分離。純増主値は約1.2枚/G。
- 導入関連はグリーンべると**1/30納品開始予定**、K-Navi/パチビー**1/31ホール導入開始**。定義差として保持し主値は1/31。

### 主要出典 — サムライチャンプルー極（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1341/`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/a.php`
- パチマガスロマガ PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/h.php`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/c.php`
- パチマガスロマガ index: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/17/newgin_slot_17.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6199`
- パチビー: `https://www.pachibee.jp/machines/lecture/210120009`
- pacnk: `https://pacnk.com/slot/tools/sh_samuraichamploo.html`
- グリーンべると: `https://web-greenbelt.jp/00006687/`
- 5号機クロニクル: `https://5goki.com/newgin-excite`

## 今回のGitHub更新

- SAME-DAY BACKFILL: `docs/real_machine_db/machines/2011-01-31_samurai-champloo-kiwami.md`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 546 / chronologicalFrontier 2011-01-31**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / `楽々温泉記` / `サムライチャンプルー極` を再取得。
2. **2011-01-31同日群をもう一段最終監査**。同日未登録機があれば先に追加。
3. 同日群が閉じたら**2011-02-01以降の最古未処理機**へ進む。日付不明候補を推測で2月前半へ置かず、当時資料の納品日/導入日を分離して確定する。
4. `残機尽きるまで私は戦うS` は2011-03-06納品開始予定のため2月へ誤繰上げしない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
