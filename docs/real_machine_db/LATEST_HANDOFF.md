# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **491**
- latestMachineAdded: **ゴッドハンターV**（SANKYO / 2010-06-08主値・導入日CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2010-06-08_god-hunter-v.md`
- chronologicalFrontier: **2010-06-08**
- frontierLatestMachine: **ゴッドハンターV**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前490「SLOTとんでも戦士ムテキング」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **490** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFF最優先候補「ゴッドハンターV」をrepo未登録確認後、491件目として追加。
- 導入日は HAZUSE=2010-06-04 / K-Navi=2010-06-07 / パチビー=2010-06-08 でCONFLICT。月間導入一覧と個別ページが一致するパチビー2010-06-08を時系列主値とし、他日付も削除せず保持。
- chronologicalFrontierを **2010-06-08** へ進めた。

## 491 — ゴッドハンターV 要約

- メーカー: **SANKYO**
- 型式名: **ゴッドハンターV**
- 検定番号: **9S1485**
- 導入主値: **2010-06-08**（パチビー）
- 導入日競合: HAZUSE **2010-06-04** / K-Navi **2010-06-07** / パチビー **2010-06-08**
- 世代/タイプ: **5号機 / ボーナス+ART / CZあり / セットストック式ART**
- 機械割: **97.3 / 99.1 / 100.7 / 104.0 / 107.7 / 112.0%**
- ボーナス合算: **1/97 / 1/96 / 1/94 / 1/91 / 1/87 / 1/70**
- V揃い合算: **1/115 / 1/114 / 1/112 / 1/109 / 1/106 / 1/86**（pacnk設定判別ページのみ設定6=1/84 → CONFLICT）
- アヌビスチャンス: **1/655 / 1/630 / 1/606 / 1/560 / 1/520 / 1/436**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**（パチマガスロマガも1000円あたり「現在調査中」）
- 基本獲得: 赤/青V **約50枚**、白V **約40枚**、アヌビスチャンス **約20枚**
- ART「ファラオタイム」: **1セット25G / 約+1.5枚/G**
- 天井: **510GでART**（P-WORLD「ボーナス間」、旧天井DB「通常状態」表現差あり）
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — ゴッドハンターV

- **設定変更**: 510G天井、高低状態、ウジャトランプ、ARTストックの設定変更時処理は十分再探索後も直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 前日ゲーム数・高低状態・ウジャトランプ・ARTストックの引継ぎを直接明記する本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 同上、直接資料未確認で `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 通常天井 **510G** は複数資料で確認。設定変更時のカウンタreset/carryは未確定。
- **モード・状態**: 通常低確/高確は確認済み。設定変更時振り分けは未確定。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン/初期出目/液晶/朝一ステージ/リールまで再探索したが本機固有の高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済み。
- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み。
- 次の欠損候補は2006-11群の `小野真弓のかわいい日本昔話` / `海童王`。既存レコードのreleaseDateと実ファイル順を確認し、順序を固定してから補完する。

## 主要出典（取得日 2026-09-03）

### ゴッドハンターV
- SANKYO公式オンライン博物館: `https://www.sankyo-fever.jp/collection/539/`
- K-Navi: `https://p-kn.com/slot/1189/`
- パチビー2010年6月導入一覧: `https://www.pachibee.jp/machines/schedule/2010-06`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5917`
- HAZUSE: `https://hazuse.com/machine/pachislot/9S1485/`
- pacnk: `https://pacnk.com/slot/2010/godhunter/top.php`
- pacnk設定判別: `https://pacnk.com/slot/tools/sh_godhunter.html`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/21/a.php`
- パチマガスロマガ1000円あたり: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/21/c.php`
- 5号機天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`
- 5号機クロニクル: `https://5goki.com/sankyo`

## 今回のGitHub更新

- 491 ゴッドハンターV追加: commit `947fd5bd366326e1b7756c893617fbbd8cff6f62`

## 次回再開地点

1. **recordCount 491 / chronologicalFrontier 2010-06-08**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-09〜2010-06-13の境界を別系統の月間導入一覧・当時業界記事で監査**し、6/8以前に落ちる未登録機を先に処理する。
3. 6/9〜13に未処理機がなければ、パチビー月間導入一覧で次の明確なパチスロ候補となる **2010-06-14「戦国物語-猛虎激闘絵巻-」** をrepo重複確認後に調査する。
4. 6/14同日群はK-Navi・P-WORLD・メーカー/販社資料等でも再照合し、パチンコ機を混入させない。
5. 遡及QAは **ジャックと豆の木まで補完済み**。次は2006-11群の `小野真弓のかわいい日本昔話` / `海童王` の順序を固定し、最初のresetBehavior欠損を補完する。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
