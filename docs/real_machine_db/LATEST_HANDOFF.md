# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **533**
- latestMachineAdded: **パチスロサクラ大戦3 ～巴里は燃えているか～**（サミー / 2011-01-11主値・1/10資料CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2011-01-11_sakura-taisen-3.md`
- chronologicalFrontier: **2011-01-11**
- frontierLatestMachine: **パチスロサクラ大戦3 ～巴里は燃えているか～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線531「緑ドン VIVA!情熱南米編」、遡及532「スペシャルハナハナII-30」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 532 / chronologicalFrontier 2010-12-10。
- 2010-12-11～12-31境界を再監査。12/13表記は既登録531「緑ドン VIVA!情熱南米編」の別資料導入日と確認して重複追加を回避。
- `真・三國無双` は平和公式2010年12月登場表記に対し、当時業界記事で2011-02-20納品開始、別資料で2/21ホール導入が確認されるため、12月本線には入れずCONFLICT候補として維持。
- 12月後半に次の未登録パチスロの強い具体導入日を確定できず、次の複数一致アンカー2011-01-11「パチスロサクラ大戦3 ～巴里は燃えているか～」へ前進。
- repo内検索で既存レコードなしを確認し533件目として追加。2012年「サクラ大戦3 -Loop Ver.-」は別機種として除外。

## 533 — パチスロサクラ大戦3 ～巴里は燃えているか～

- メーカー: **サミー**
- 世代/タイプ: **5号機 / A+ART / セットストックART**
- 導入主値: **2011-01-11**
- 導入CONFLICT: **2011-01-10**とするJ-CAST転載資料あり
- 型式表記: **サクラ大戦3AX**（後年実機資料で補助照合）
- 機械割: **97.2 / 98.8 / 101.3 / 104.9 / 110.0 / 115.0%**
- BIG合成: **1/414.8 / 407.1 / 394.8 / 381.0 / 370.3 / 362.1**
- REG: **1/624.1 / 590.4 / 560.1 / 532.8 / 500.2 / 474.9**
- ボーナス合算: **1/249.1 / 240.9 / 231.5 / 222.1 / 212.7 / 205.4**
- ART初当たり: **1/233.3 / 225.3 / 205.0 / 183.3 / 157.1 / 137.4**
- 50枚ベース: **33.3 / 33.1 / 33.1 / 32.9 / 32.9 / 32.9G/1000円**
- ART「光武モード」: **50G / 約+1.4枚/G**
- 赤7BIG約**300枚** / 白7BIG約**200枚** / REG約**30～50枚**
- 通常天井: **ボーナスもARTも引かず900G → ARTストック**
- シングル天井: **ボーナス後100Gシングル非成立 → ARTストック**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- 設定変更で**天井到達までのゲーム数をクリア**。
- 設定変更時、低確/高確/超高確を再抽選。公開値:
  - 設定1: **74.5 / 25.0 / 0.5%**
  - 設定2: **73.4 / 26.0 / 0.6%**
  - 設定3: **72.4 / 26.9 / 0.7%**
  - 設定4: **71.3 / 27.9 / 0.8%**
  - 設定5: **70.2 / 28.9 / 0.9%**
  - 設定6: **69.1 / 29.9 / 1.0%**
- 液晶滞在ステージは設定変更時もそのままと旧解析に記載。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の通常/シングル天井・状態・ARTストックの厳密な保持範囲: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井・状態・ARTストック: **UNVERIFIED_AFTER_RESEARCH**。別スペックのLoop Ver.や2017年機の情報は転用していない。
- K-Naviに「ガックン判別は通用する?」専用項目の存在までは確認したが、検索取得本文から具体結論を安全に回収できず、**UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **VERIFIED_SETTING_CHANGE_COUNTER_AND_STATE_WITH_CARRYOVER_POWER_CYCLE_DETECTION_GAPS**。

## CONFLICT / 注意

- 導入日: K-Navi・GameBusiness・業界系資料は**2011-01-11**、J-CAST転載は**2011-01-10**。複数一致の1/11を主値、1/10をCONFLICTとして保持。
- 2011年1月には想定以上に出玉率が高く推移するとのホール報告を受け、サミーが設置継続を希望しないホール向けの回収/代替機対応を発表。これは市場実績/運用問題であり、物差し用の公称/解析機械割97.2～115.0%と混同しない。
- formalModelName `サクラ大戦3AX` は後年の実機資料複数で整合するが、inspectionNumberは安全に確定できずUNVERIFIED_AFTER_RESEARCH。

## 主要出典 — 533（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1320/`
- GameBusiness.jp: `https://www.gamebusiness.jp/article/2011/01/29/2975.html`
- 娯楽産業: `https://www.goraku-sangyo.com/サミー-「パチスロサクラ大戦3」の対策について/`
- J-CAST転載: `https://news.livedoor.com/article/detail/5295050/`
- クランキーセブン旧解析: `https://crankyseven.com/sakurataisen3-pc.htm`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/126/a.php` / `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/126/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6159`
- Pマンズ/プレイグラフ転載: `https://p-mans.blogspot.com/2010/11/`
- 愛品館実機資料: `https://www.aihin.co.jp/new/news-978320/`

## 今回のGitHub更新

- 533追加: `docs/real_machine_db/machines/2011-01-11_sakura-taisen-3.md`
- machine record commit: `4d5ac4e17155b743f5eafb2227e3f3586d144586`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 533 / chronologicalFrontier 2011-01-11**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 533実レコードを再取得。
2. **2011-01-11同日群を最終監査**し、1/12以降の最古未処理機種へ進む。
3. HAZUSE等の2011年1月カレンダー節点（1/14、1/21、1/25、1/28、1/31等）をメーカー別・当時業界記事と照合し、パチンコのみの日付を除外してパチスロ最古未登録を確定する。
4. 既知候補ではSANKYO「パチスロ キャプテンハーロック」が当時資料で**2011-01-24導入開始予定**。ただし1/12～1/23の未処理有無を先に監査し、順序を飛ばさない。
5. `真・三國無双` の2010年12月登場/2011年2月導入競合は日付定義を分離したまま保持し、2月境界到達時に再判定する。
6. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
