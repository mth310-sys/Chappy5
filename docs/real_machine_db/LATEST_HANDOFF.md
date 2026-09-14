更新日: 2026-09-14

## 現在地点
- recordCount: **1711**
- latestRecordAdded: **回胴黙示録カイジ 狂宴 — No.1711**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-03-03_kaido-mokushiroku-kaiji-kyoen.md`
- chronologicalFrontier: **2025-03-03**
- schema: **resetBehavior v0.7**
- status: **2025-03-03_GROUP_OPEN_2_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、既存レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1710 `Sister Quest` の次の未処理機種としてNo.1711 `回胴黙示録カイジ 狂宴` を追加し、性能コア + resetBehavior v0.7を収録。
- 設定2機械割は98.8% / 98.9%で資料差があり、98.8%をcanonicalとし `CONFLICT_SETTING2_PAYOUT_98_8_VS_98_9` を保持。
- 2025-03-03群は既知canonical 4件中2件完了。残りは `L 仮面ライダー電王` → `L少女☆歌劇 レヴュースタァライト-The SLOT-` の順で継続する。
- resetBehavior遡及QAは既処理カーソル `2007-07-09_genju-haou-t.md` まで再確認。直後の最初のresetBehavior欠損レコードを今回中に安全に一意固定できなかったため、既存旧レコードを推測更新していない。

## No.1711 — 回胴黙示録カイジ 狂宴
- path: `docs/real_machine_db/machines/2025-03-03_kaido-mokushiroku-kaiji-kyoen.md`
- manufacturer: **サミー / ロデオ**
- formalModel: **L スマスロカイジ 狂宴 FJ**
- inspectionCode: **4S1731**
- releaseDate: **2025-03-03**
- payoutRate: **97.8 / 98.8 / 101.5 / 105.4 / 108.5 / 111.2%**（設定2は98.9%資料もありCONFLICT）
- initialHit: **1/384.9 / 1/376.0 / 1/360.0 / 1/324.6 / 1/304.2 / 1/290.6**
- bonusCombined: **1/180.4 / 1/175.9 / 1/167.8 / 1/154.2 / 1/145.7 / 1/139.3**
- base: **約31.8G/50枚**（HAZUSEはCZ込み約33.8Gも併記）
- netIncrease: **約5.3枚/G**
- normalCeiling: **1000G+α**
- resetCeiling: **800G+α**
- reset: **有利区間・天井G・内部状態・通常モード・裏レートモード・死神モード・養分ポイントをRESET/再抽選。内部G数ランダム短縮あり。**
- carryOver: **据え置きは有利区間、天井、内部状態、内部モード、養分ポイント等を引継ぎ。**
- powerCycle: **天井G、状態、通常モード、裏レートモード、死神モード、養分ポイントを引継ぎ。純電断時の有利区間そのものは機種固有明記を固定できずUNVERIFIED。**
- publicMorningNumbers: **設定変更時モードA 60.2% / B 9.4% / C 27.3% / D 3.1%、B以上39.8%（約40%）、死神モード開始約20%、1G目レア役はざわ高確移行濃厚。**
- resetBenefits: **天井800G+α短縮、内部G数ランダム短縮、モードB以上約40%、死神モード約20%、養分ポイント初期値再抽選、低確率トネガワRUSH直撃抽選。**
- resetDetection: **確定判別法は公開確認できず。本機固有ガックン条件・発生率も再探索後UNVERIFIED。800G+α超過は据え置き推測材料。**
- importantRule: **設定変更以外の有利区間リセット後にCZ＋超千載一遇シナリオ恩恵があるが、設定変更時は除外。朝一恩恵へ混入しない。**
- missing: **純電断時有利区間、朝一ステージ確定契約、本機固有ガックン、トネガワRUSH朝一直撃率の具体値、数値化された設定変更固有不利率。**

## 2025-03-03境界 — OPEN 2/4 known canonical
1. Sister Quest — No.1710 DONE
2. 回胴黙示録カイジ 狂宴 — No.1711 DONE
3. L 仮面ライダー電王 — No.1712 candidate / NEXT
4. L少女☆歌劇 レヴュースタァライト-The SLOT- — candidate

## 次回再開地点
- 最新mainを再同期しNo.1711と本handoffを確認。
- **No.1712候補 `L 仮面ライダー電王` — 2025-03-03** から再開する。
- 型式・検定番号、性能コア + resetBehavior v0.7を本調査する。
- 続いて `L少女☆歌劇 レヴュースタァライト-The SLOT-` を処理し、2025-03-03群4候補完了後、PB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は同カーソル直後の最初のresetBehavior欠損レコードを実体順で安全に一意固定できず、推測更新は行っていない。
- 次回も新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを確定して遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
### 回胴黙示録カイジ 狂宴
- HAZUSE 型式/検定/導入/基本スペック: https://hazuse.com/hd/4s1731/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S1731/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/85980/
- パチ&スロ必勝本 天井/設定変更/電源OFF-ON: https://hisshobon.com/machineinfo/85978/
- なな徹 朝一/設定変更/据え置き/有利区間: https://nana-press.com/kaiseki/machine/908/28069/
- ちょんぼりすた 基本/天井/朝一/モード振り分け: https://chonborista.com/slot/sammy-slot/228305/
- Sammy公式製品ページ: https://www.sammy.co.jp/japanese/product/pachislot/kai_ky/

### Sister Quest（前回継承）
- カルミナ公式製品ページ: https://carmina-gaming.co.jp/product/sister-quest/
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/SX0097/
- 1geki 天井/朝一/設定変更/電源ON-OFF: https://1geki.jp/slot/l_sisterquest/3/
- なな徹 朝一/設定変更/据え置き/有利区間: https://nana-press.com/kaiseki/machine/906/27933/
