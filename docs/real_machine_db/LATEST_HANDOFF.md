# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **973**
- latestRecordAdded: **スーパーストリートファイターIV パチスロエディション**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-18_super-street-fighter-iv.md`
- chronologicalFrontier: **2016-04-18**
- frontierLatestMachine: **スーパーストリートファイターIV パチスロエディション**
- schema: **resetBehavior v0.7**
- status: **2016-04-18_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.971 `2016-04-11_petit-mermaid.md`、No.972 `2016-04-11_total-eclipse.md` を再取得してから作業。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点のmainはrecordCount 972 / chronologicalFrontier 2016-04-11。旧会話地点のNo.969へ戻らず、LATEST_HANDOFF指定の04/11群境界監査から継続。

## 2016-04-04群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.968 **パチスロ 機動警察パトレイバー**（北電子）
- No.969 **キングパルサー～DOT PULSAR～**（山佐）
- No.970 **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**（DAXEL）

追加の全国初導入5号機を現調査範囲で固定できず、前回からCLOSEDを維持。

## 2016-04-11群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.971 **プチマーメイド**（北電子）
- No.972 **パチスロ マブラヴ オルタネイティヴ トータル・イクリプス**（SANKYO、4/11 vs 4/18 CONFLICT保持）

### スーパーストリートファイターIV境界監査
- すろぱちくえすと2016導入日一覧は **2016-04-11** 群に掲載。
- しかしHAZUSEは型式 `スーパーストリートファイターIV／ZY` / 検定 `5S1463` / **導入開始2016-04-18** と明記。
- ちょんぼりすた、期待値見える化等の機種別当時資料も **2016-04-18** で一致。
- エンターライズ公式特設は 3/22開設 → 3/28スペック更新 → 4/4製品特徴更新 → **4/11演出紹介更新** → 4/18スペシャル更新。4/11は公式ページ更新日であり、全国導入日を示す記述ではない。
- よって本DBでは **2016-04-18をcanonical** とし、4/11は `CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18` としてNo.973内に保存。
- 04/11群の追加全国初導入本線候補は今回の再監査でも固定できなかったため **2016-04-11_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## No.973 — スーパーストリートファイターIV パチスロエディション
- record: `docs/real_machine_db/machines/2016-04-18_super-street-fighter-iv.md`
- manufacturer: **エンターライズ**
- releaseDate canonical: **2016-04-18**
- formalModelName: **スーパーストリートファイターIV／ZY**
- certificationNumber: **5S1463**
- generation/system: **5号機 / ART / 疑似ボーナス+ゲーム数上乗せART**

### performanceCore
- 機械割: **97.6 / 98.6 / 100.4 / 103.1 / 105.5 / 110.1%**。
- 通常時疑似ボーナス初当たり: **1/199.9 / 189.3 / 191.5 / 175.0 / 175.2 / 158.7**。
- ART初当たり: **1/626.7 / 570.6 / 593.4 / 486.4 / 500.7 / 400.5**。
- ベース canonical: **約41.9～42G/50枚**。別資料の約47GはCONFLICT保持。
- 純増: **約1.7枚/G**。
- スパIVチャンス **30G+α**、スパIVアタック **20G**、ART「波動連舞」 **初期40G+α**、狂鬼狂乱 **30G**。

### resetBehavior v0.7
- 設定変更時: **777Gゲーム数天井RESET / スルー回数天井RESET+短縮抽選 / 内部状態RESELECT / 韓国ステージ**。
- 純電源OFF→ON: **ゲーム数天井CARRYOVER / スルー回数天井CARRYOVER / 内部状態CARRYOVER / 韓国ステージ**。
- 据え置き: 電源OFF→ON直接比較資料から実運用上 **CARRYOVER_SUPPORTED**。電断を伴わない据え置き単独の一次契約は固定できず、その限定をレコードへ明記。
- 通常ゲーム数天井: **通常時777GでスパIVチャンス**。ART直撃確定ではない。
- スルー回数天井: **ART非当選スパIVチャンス10連続スルー → 11回目でART確定**。
- 設定変更時スルー回数天井短縮当選率: **10.0 / 12.4 / 15.6 / 25.0 / 37.5 / 45.0%（設定1→6）**。
- 短縮当選時: **設定変更後1回目のスパIVチャンスでART確定**。
- 設定変更時の低確/高確具体的振り分け: 検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: 設定変更/純電断とも韓国ステージのため画面単独判別不可。ガックン「なし？」記述は資料自身が過去筐体からの予測と明記しているため採用せず、本機固有の確定ガックン/初期出目/ランプ契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### conflicts / caution
- `CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18`: canonical 4/18。
- `CONFLICT_BASE_41_9_TO_42_VS_47`: canonical約41.9～42G/50枚。
- ガックン「なし？」は予測情報なのでCONFLICT扱いせず、変更判別契約へ不採用。

## 2016-04-18群 — OPEN
登録済み:
- No.973 **スーパーストリートファイターIV パチスロエディション**（エンターライズ）
- No.972 **トータル・イクリプス**は4/18表記資料もあるが既登録のため重複登録しない。

次の確認済み候補:
1. **アステカ-太陽の紋章-**（エレコ）
   - HAZUSE / K-Navi / パチビー等で **2016-04-18**。
   - 型式 **アステカ太陽の紋章AE**、検定 **6S0049**。
   - 次回は性能コア＋resetBehavior v0.7を本収集する。
2. **ニューチバリヨ**
   - 2016年導入日一覧の4/18群候補。次回、正式メーカー/型式/具体導入日を当時DBで再照合してから処理順を固定する。

- 04/18群はスパIV追加のみで閉じない。アステカ、ニューチバリヨおよび全メーカー横断の残存候補を処理/監査後にCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**（変更なし）
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.973と04/11→04/18境界監査を優先し、遡及QAは進めていない。

## 次回再開地点
1. **recordCount 973 / chronologicalFrontier 2016-04-18 / 04-18群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.972 / No.973を最新mainから再取得。
3. 次の未処理機種 **2016-04-18「アステカ-太陽の紋章-」（エレコ）** をNo.974候補として処理。
4. アステカ後に **ニューチバリヨ** の日付・メーカー・型式を再照合し、04/18群を全メーカー横断監査。
5. トータル・イクリプスは既登録No.972なので4/18側で重複登録しない。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
8. 遡及QAは `2006-02_nurse-witch-komugi-chan-magicalte.md` から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainコミットを優先。
- 全国導入日と記事公開日・公式ページ更新日・発表日・納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.973 スーパーストリートファイターIV パチスロエディション
- エンターライズ公式: https://www.enterrise.co.jp/slot/spsf4/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1463/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/5S1463/genre/206/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/12/c-1.php
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2727/1/57820
- 期待値見える化: https://slotjin.com/zone/supa4/
- 楽スロ: https://rakuslo.com/streetfighter4-asaiti.html
- イチカツ！: https://ichikatsu.com/ssf4-reset/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/17780/
- 5号機クロニクル: https://5goki.com/enterrise
- P-WORLD: https://www.p-world.co.jp/machine/database/8014
- すろぱちくえすと2016導入日一覧: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
- 必勝期待値クマぱぱ: https://xn--x9ja8p0go69l5jtgfm.com/superstreetfighter4-1904

### 次候補 アステカ-太陽の紋章-
- HAZUSE: https://hazuse.com/machine/pachislot/6S0049/
- K-Navi: https://p-kn.com/slot/2478/
- パチビー: https://www.pachibee.jp/machines/index/216030006
