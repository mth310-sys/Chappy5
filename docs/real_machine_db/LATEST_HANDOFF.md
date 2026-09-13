更新日: 2026-09-13

## 現在地点
- recordCount: **1585**
- latestRecordAdded: **防空少女ラブキューレ2～極限の共鳴～ — No.1585**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-08-07_love-cure2.md`
- chronologicalFrontier: **2023-08-07**
- frontierLatestMachine: **防空少女ラブキューレ2～極限の共鳴～ — No.1585**
- schema: **resetBehavior v0.7**
- status: **2023-08-07_GROUP_CLOSED_6_OF_6_CANONICAL_PROCESSED / AUGUST_NO_LATER_SLOT_LAUNCH_FOUND / NEXT_GROUP_2023-09-04 / NEXT_NO1586_CANDIDATE_SENGOKU_OTOME4**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1579 `スマスロ バイオハザード:ヴェンデッタ` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-08-07群として以下6機を性能コア + resetBehavior v0.7で追加。
  1. No.1580 `ぱちスロ 乃木坂46`
  2. No.1581 `スマスロ 戦国BASARA GIGA`
  3. No.1582 `スマスロキン肉マン～7人の悪魔超人編～`
  4. No.1583 `スーパービンゴネオクラシック`
  5. No.1584 `スーパービンゴネオクラシック-30`
  6. No.1585 `防空少女ラブキューレ2～極限の共鳴～`
- ALL7 2023年8月導入一覧では2023-08-07のパチスロが上記6機で一致。2023-08-21掲載はパチンコのみで、別カレンダーでも同日にパチスロ新台を固定できず、**2023-08-07群 CLOSED 6/6**、2023年8月の次パチスロ境界は **2023-09-04** と判断。
- PB・別型式・30Φ派生・地域先行・延期/段階導入を再監査。ビンゴ25Φ/30Φは別製造元・別型式・別検定番号のため独立レコード化。
- 各機の欠損は機種名表記揺れ、正式型式、メーカー/製造元と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 周期 / ガックン / 有利区間` を組み替え、公式・業界・当時解析・古いDB・後年整理資料を横断。固定できない項目のみ推測補完せず残した。

## No.1580 — ぱちスロ 乃木坂46
- path: `docs/real_machine_db/machines/2023-08-07_nogizaka46.md`
- manufacturer: **SUN SUN SUN製造 / 京楽産業.**
- formalModel / inspectionCode: **Lパチスロ乃木坂46UD / 3S0031**
- releaseDate: **2023-08-07**
- generation/system: **6.5号機 / スマスロAT**
- payoutRate: 設定0/1/2/4/5/6 = **102.5 / 97.4 / 98.6 / 104.2 / 107.4 / 110.0%**
- AT初当たり: **1/147.1 / 1/361.8 / 1/348.0 / 1/297.2 / 1/273.5 / 1/254.9**
- CZ: **1/153.5 / 1/146.3 / 1/141.2 / 1/131.5 / 1/129.0 / 1/123.4**
- base: **約32.8G/50枚** / netIncrease: **約2.6枚/G**
- reset: 設定変更で有利区間・天井・MAP・状態・大変身メーターRESET。設定1/2/4/5/6は **333G+α天井50% / 999G+α50%**、設定0は333G 99.6%。
- carry/power: 据え置きおよび純電断は天井・MAP・内部状態等を引継ぎ。純電断は表示だけ0G/非点灯へ戻る。
- resetDetection: 朝一ステージ共通、有利区間ランプ判別不可。ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE** / resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## No.1581 — スマスロ 戦国BASARA GIGA
- path: `docs/real_machine_db/machines/2023-08-07_sengoku-basara-giga.md`
- manufacturer: **エンターライズ**
- formalModel / inspectionCode: **L戦国BASARAギガZE / 3S0064**
- releaseDate: **2023-08-07 canonical**
- payoutRate: 設定1〜6 **98.1 / 99.6 / 102.0 / 105.0 / 107.0 / 110.0%**
- AT: **1/529.6 / 1/504.0 / 1/443.4 / 1/390.6 / 1/363.6 / 1/347.4**
- CZ: **1/256.7 / 1/249.8 / 1/227.3 / 1/205.2 / 1/200.0 / 1/197.2**
- base **約32.5G/50枚** / netIncrease **約3.1枚/G**
- reset: 設定変更で通常C/天国のみ。C/天国比率は設定1 **50.0/50.0%** → 設定6 **39.8/60.2%**。最大規定歩数999→**549歩以内**。
- pure power: 天井・内部状態引継ぎを直接確認。歩数/モード/有利区間の純電断独立明記は `UNVERIFIED_AFTER_RESEARCH`。
- conflict: 5/8・6/5系の事前スケジュール/情報公開と実ホール導入8/7に差。**2023-08-07をcanonical**、過去日付は事前段階のCONFLICT保持。
- coreStatus: **COMPLETE_CORE** / resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## No.1582 — スマスロキン肉マン～7人の悪魔超人編～
- path: `docs/real_machine_db/machines/2023-08-07_kinnikuman-7devils.md`
- manufacturer: **セブンリーグ製造 / 山佐ネクスト販売**
- formalModel / inspectionCode: **Lパチスロキンニクマン4SLDC / 3S0295**
- releaseDate: **2023-08-07**
- payoutRate: 設定1/2/4/5/6 **97.9 / 99.1 / 106.0 / 110.6 / 114.9%**
- AT: **1/404.1 / 1/400.6 / 1/362.1 / 1/350.7 / 1/336.5**
- base **約30.9G/50枚** / netIncrease **約6.1枚/G**
- reset: 設定変更時 **チャンスモード約25% / 高確約25%**。通常A平均規定743万→**683万パワー**、通常B 611万→**598万**、チャンス平均**121万**。
- pure power: 有利区間・天井・内部モード・内部状態を引継ぐことを直接確認。
- resetDetection: 設定L下パネル消灯はL判別で変更判別とは別。ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE** / resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## No.1583 — スーパービンゴネオクラシック
- path: `docs/real_machine_db/machines/2023-08-07_super-bingo-neo-classic.md`
- manufacturer: **ベルコ販売製造 / ベルコ**
- formalModel / inspectionCode: **SスーパービンゴHH1 / 2S1848**
- releaseDate: **2023-08-07**
- payoutRate: 設定1/2/3/4/6 **98.0 / 99.5 / 101.0 / 103.0 / 106.0%**
- BC: **1/354.6 / 1/330.1 / 1/315.8 / 1/299.7 / 1/283.8**
- base **約32.5G/50枚** / netIncrease **約2.8枚/G** / BC基本33G or Hooah。
- reset: ゲーム数周期・デジ周期・有利区間・天井RESET。少ないデジ周期と初回周期BC期待度が優遇。
- pure power: 周期・有利区間・天井をすべて引継ぎ。
- normal ceiling: **999G+α**。固定短縮天井は確認なし。
- coreStatus: **COMPLETE_CORE** / resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## No.1584 — スーパービンゴネオクラシック-30
- path: `docs/real_machine_db/machines/2023-08-07_super-bingo-neo-classic-30.md`
- manufacturer: **ヤーマ製造 / ベルコ**
- formalModel / inspectionCode: **SスーパービンゴHY1-30 / 3S0080**
- releaseDate: **2023-08-07**
- generation: **6.5号機 / 30Φ**
- performance: 25Φ版と同じ公開値（BC **1/354.6→1/283.8**, payout **98.0→106.0%**, 約32.5G/50枚, 純増約2.8枚/G）。
- reset: 30Φ版を直接扱う資料でゲーム数周期・デジ周期・有利区間・天井RESET、初回デジ周期期待度優遇を確認。
- pure power: 同4項目を引継ぎ。
- 25Φと別製造元・型式・検定番号・30Φのため独立レコード。
- coreStatus: **COMPLETE_CORE** / resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## No.1585 — 防空少女ラブキューレ2～極限の共鳴～
- path: `docs/real_machine_db/machines/2023-08-07_love-cure2.md`
- manufacturer: **KPE製造 / コナミアミューズメント**
- formalModel / inspectionCode: **Lラブキューレ2PS / 3S0048**
- releaseDate: **2023-08-07**
- generation/system: **6.5号機 / スマスロA+ART**
- payoutRate: **97.9 / 98.7 / 100.3 / 104.2 / 105.1 / 108.0%**
- BIG: **1/299.3→1/292.6** / REG **1/448.9→1/434.0** / ART **1/549.4→1/384.9**
- base **約35G/50枚** / ART純増 **約1.1枚/G** / BIG約150枚 / REG約40枚。
- normal ceiling: ボーナス&ART間 **1000G+α**でART。
- reset: 有利区間・天井・内部状態RESET。朝一1回目BIGはソニックモード抽選優遇。設定変更後の一部でソニックモードチャンス状態。
- state public value: 高確80% / 超高確20%は単一整理資料値のため **ANALYSIS_SINGLE** として保持。
- pure power: 有利区間・天井・内部状態を引継ぎ。
- resetDetection: 有利区間ランプ不可。リール停止形を保持していればガックンは変更推測材料（純電断は非ガックンとする解析）。
- coreStatus: **COMPLETE_CORE** / resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## 2023-08-07群 — CLOSED 6/6 canonical processed
1. ぱちスロ 乃木坂46 — No.1580 **DONE**
2. スマスロ 戦国BASARA GIGA — No.1581 **DONE**
3. スマスロキン肉マン～7人の悪魔超人編～ — No.1582 **DONE**
4. スーパービンゴネオクラシック — No.1583 **DONE**
5. スーパービンゴネオクラシック-30 — No.1584 **DONE**
6. 防空少女ラブキューレ2～極限の共鳴～ — No.1585 **DONE**

### 群境界
- ALL7 2023年8月一覧は8/7パチスロとして上記6機を列挙。
- 8/21は同一覧でパチンコのみ。別導入カレンダーも「8/21スロット未確認」。PB・別型式・30Φ派生・地域先行・延期/段階導入を含む追加独立機を固定できず、8/7群をCLOSED。
- 次のknownパチスロ境界は **2023-09-04**。

## 次回再開地点
- **No.1586候補: L戦国乙女4 戦乱に閃く炯眼の軍師**
- canonical導入候補日: **2023-09-04**
- 2023-09-04群を冒頭で再監査し、未処理先頭と同日全件を最終確定してから処理する。
- 複数カレンダーの現時点known候補（パチスロ）:
  1. L戦国乙女4 戦乱に閃く炯眼の軍師 — オリンピアエステート
  2. パチスロ傷物語 ‐始マリノ刻‐ — ロデオ/サミー系
  3. PACHISLOT 009 RE:CYBORG — ニューギン
  4. 回胴式遊技機 グランベルム — 北電子
  5. ファミスタ回胴版!! — ユニバーサルブロス
- ALL7 9月ページ第1面は戦国乙女4 / 009 / 傷物語を掲載し、K-Naviおよび導入実績資料でグランベルム / ファミスタも9/4を確認。次回、PB・別型式・地域差まで再監査して群件数を固定する。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール/情報公開表記 vs 実導入2023-08-07。**No.1581で2023-08-07 canonicalとして正式処理済み**。過去日付はCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。1/167.1をcanonical。
- `パチスロ 蛇喰夢子という女`: 設定変更後650G短縮は `PROVISIONAL_PUBLIC_VALUE` を維持。有利区間約2500G天井説はcanonical不採用。
- `パチスロ からくりサーカス`: 設定変更時の通常C優遇率は公開固定値未確認。
- `S 織田信奈の野望 全国版`: 一部検定記事の製造元「朝日テクノロジー」は発売発表・複数業界資料の「新日テクノロジー」と競合するため誤記候補として保持。設定1/2/4/5/6をcanonical。ベース約33G vs 約33.6Gは丸め/算出差として両方保持。
- `パチスロ 戦国†恋姫`: 導入日は複数資料の2023-07-18をcanonical。HAZUSEの2023-07-17は minority conflictとして保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### 群境界
- ALL7 2023年8月: https://www.all7.jp/plans/index/2023/08
- ALL7 2023年9月: https://www.all7.jp/plans/index/2023/09
- K-Navi 2023年9月: https://p-kn.com/calendar/202309/

### No.1580 乃木坂46
- 京楽公式: https://www.kyoraku.co.jp/news/detail/698
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/25027/nippon
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9878
- なな徹朝一: https://nana-press.com/kaiseki/machine/586/16277/
- 一撃: https://1geki.jp/slot/l_nogizaka46/3/

### No.1581 戦国BASARA GIGA
- エンターライズ公式: https://www.enterrise.co.jp/
- グリーンべると: https://web-greenbelt.jp/post-75158/
- なな徹朝一: https://nana-press.com/kaiseki/machine/580/16112/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/188511/

### No.1582 キン肉マン
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/24159/nippon
- パチマガスロマガ朝一: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/04/tj08-2.php
- なな徹朝一: https://nana-press.com/kaiseki/machine/583/16190/
- 一撃: https://1geki.jp/slot/l_niku7devil/3/

### No.1583/1584 スーパービンゴネオクラシック
- ベルコ公式: https://www.s-bellco.co.jp/news/202230602_01/
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/24678/nippon
- 検定通過: https://news.p-world.co.jp/articles/24404/yugitsushin
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/9860
- P-WORLD 30Φ: https://www.p-world.co.jp/machine/database/9861
- なな徹朝一: https://nana-press.com/kaiseki/machine/589/16088/
- パチマガスロマガ朝一: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/110/kr01-1.php
- 一撃30Φ: https://1geki.jp/slot/s_sbingo_nc_30/3/

### No.1585 ラブキューレ2
- コナミ公式: https://www.konami.com/amusement/corporate/ja/news/release/20230428/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9856
- なな徹朝一: https://nana-press.com/kaiseki/machine/575/16164/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/21/kr07.php
- スロットセブン: https://slot-seven.com/lovekyure2-tenzyou/
- Flick7: https://flick7.net/slot/lovekyure2__k.php
