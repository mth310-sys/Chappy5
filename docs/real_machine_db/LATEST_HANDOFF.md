# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **330件地点 / 時系列本線2008-12-08完了**。
- 今回、12月境界を再監査し、**331 `鬼浜爆走紅蓮隊 爆音烈士編`（アビリット / 2008-12-14納品開始予定）** を追加。
- **既存331件の再追加禁止。**

## 331. 鬼浜爆走紅蓮隊 爆音烈士編

record:
- `docs/real_machine_db/machines/2008-12-14_onihama-bakuso-gurentai-bakuon-resshihen.md`

要点:
- machineName: 鬼浜爆走紅蓮隊 爆音烈士編
- manufacturer: **アビリット**（当時発表主体。ALL7は高砂、現P-WORLDはコナミアミューズメント表記のため時代/系列差として注記）
- releaseDate: **2008-12-14**（当時グリーンべると納品開始予定、ALL7導入予定）。HAZUSEは12/15導入開始表記で1日差があるため、納品/導入定義差として保持。
- modelName: `オニハマバクソウグレンタイ2`
- inspectionNumber: `8S0609`
- generation: 5号機
- systemType: **A+ART**
- ART `カッ飛びRUSH`: 当時業界/解析の主要表記で約**+2.0枚/G**、平均約100G。ボーナスを引いても残ART G数は継続。
- BIG約**230枚** / BG・REG系約**36枚** / 男気ミッション平均約**50枚**（最大174枚表記あり）。
- BIG確率: 設定1〜4 **1/2048.00**、設定5 **1/1771.24**、設定6 **1/1560.38**。
- BG/REG: 設定1〜5 **1/237.45**、設定6 **1/286.18**。
- 男気: **1/115.99 → 1/103.70**（設定6は1/103.70）。
- ボーナス合算: **1/75.07 → 1/72.58**、設定5が最軽量 **1/70.54**。
- 1000円ベース: **27.05〜27.19G**。
- 機械割はP-WORLD市場掲載 **96.0 / 98.1 / 100.0 / 103.3 / 106.5 / 110.9%** とパチマガスロマガ・シミュレート **95.41 / 97.41 / 100.22 / 102.94 / 107.23 / 111.67%** が競合。平均せず `CONFLICT`。

### v0.7 resetBehavior

- settingChangeBehavior: 当時必勝本解析で、**設定変更時は高確46.9% / 超高確46.9%**。合計**93.8%が高確以上スタート**という公開朝一数値を回収。
- modeAfterReset/stateAfterReset: 高確/超高確への再選択は確認。残り6.2%の状態名は本文に直接明記がないため推測で低確とは断定しない。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の内部状態/ART残G引継ぎを本機固有直接資料で確定できず。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみの状態/ART残G処理を確定できず。
- gameCounterReset / ceilingAfterReset: 通常ゲーム数天井の直接数値を本機で確定できず、設定変更専用短縮天井も確認なし。後継鬼浜シリーズの天井仕様は流用しない。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits: 設定変更時の高確以上93.8%。直接のART当選率ではなく状態移行率として保存。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに「液晶背景判別」項目の存在は確認できるが、具体条件本文を回収できないためガックン/初期出目/背景での変更判別を確定扱いしない。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003938/
- https://www.all7.jp/plans/index/2008/12/10
- https://www.p-world.co.jp/machine/database/5379
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/22/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/22/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/22/h.php
- https://p.hisshobon.jp/machine/1275/1/19263
- https://p-kn.com/slot/890/
- https://w.atwiki.jp/5gouki/pages/122.html

## 今回の境界監査

- `魔界城`（岡崎産業）は2008年12月機で、当時グリーンべるとから機種発表/ゲーム性は確認できたが、**2008-12-14より前と断定できる具体納品・ホール導入日を今回も確定できず**。日付推測で331より前へ挿入しない。
- `シャドウハーツII`（ミズホ）はユニバーサル公式で**2008年12月発売**を確認したが、**12/14より前と確定する具体日は回収できず**。推測挿入しない。
- `鬼浜爆走紅蓮隊 爆音烈士編` は当時グリーンべるとが**12/14納品開始予定**、ALL7も12/14。HAZUSEのみ12/15導入開始のため、納品/導入の定義差として注記し、具体日一次業界資料を時系列主根拠とした。

## 次回再開地点

1. **LATEST_HANDOFF基準331件地点 / 時系列本線は2008-12-14まで完了。**
2. 次は **2008-12-15群** を既存レコード照合して最古未処理から継続する。
3. 優先候補は `シンゾウニンゲン`、`トリプル沖V`、`HAIBいちろう`。同日群のため、まずrepo既存確認・正式メーカー/型式/導入日の照合を行い、未登録の本線1機種から332件目へ進む。
4. その後、具体日確定済みの **2008-12-22 `スロット代紋TAKE2`** へ向かう。
5. `魔界城` / `シャドウハーツII` は具体導入日が後続調査で確定した時点で時系列へ遡及挿入する。月情報だけで日付を推測しない。
6. 欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を含む検索語・資料系統を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。

## コミット（今回）

- 331 鬼浜爆走紅蓮隊 爆音烈士編: `8c62db91fa1b69d6fe6eba56c795667b7c0917f9`
