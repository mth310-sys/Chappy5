更新日: 2026-09-14

## 現在地点
- recordCount: **1742**
- latestRecordAdded: **LBトリプルクラウン — No.1742**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-07-07_lb-triple-crown.md`
- chronologicalFrontier: **2025-07-07**
- schema: **resetBehavior v0.7**
- status: **2025-07-07_GROUP_CLOSED_5_OF_5_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1740実レコードを再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1741 `ハイビリターン-30` と No.1742 `LBトリプルクラウン` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-07-07群は情報島の過去新台一覧でも5機一致を確認し、既知canonical 5/5処理済みとしてCLOSED。
- 7/22・7/28は確認できた新台がパチンコのみで、次の全国パチスロ導入本線は2025-08-04の6機群。
- `L アズールレーン THE ANIMATION` は2025-07-23に京楽直営店でフィールドテスト先行導入があるが、全国導入canonicalは2025-08-04として扱う。

## No.1741 — ハイビリターン-30
- path: `docs/real_machine_db/machines/2025-07-07_haibi-return-30.md`
- manufacturer: **パイオニア**
- formalModel: **SハイビリターンPA-30**
- inspectionCode: **5S0123**
- releaseDate: **2025-07-07**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **98.1 / 99.5 / 102.4 / 105.4 / 108.0%**（設定1/2/4/5/6）
- bonusInitial: **1/296.7 / 1/289.0 / 1/269.4 / 1/250.2 / 1/240.8**
- BIG appearance: **1/231.2 / 1/226.5 / 1/214.0 / 1/201.9 / 1/195.5**
- REG appearance: **1/346.1 / 1/337.7 / 1/315.4 / 1/294.0 / 1/283.7**
- combined appearance: **1/138.6 / 1/135.6 / 1/127.5 / 1/119.7 / 1/115.8**
- base: **約29.8G/50枚**
- netIncrease: **約9.0枚/G**
- basicPayout: **BIG約300枚 / REG約100枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1741 resetBehavior v0.7
- 設定変更で天井ゲーム数RESET、内部モード再抽選。純電源OFF→ONでは天井・モードを引継ぎ。
- 通常A/B/Cは約999G、ハイビは約1005G。設定変更時のみ移行可能なチャンスモードなら約250G天井。
- 設定変更時の具体モード振り分けは主要解析で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。約33%表記の単一低優先二次資料はcanonical不採用。
- 有利区間は設定変更RESET・純電断CARRY_OVERとする機種別二次解析あり。ただし主要必勝本比較表に独立欄がないため `ANALYSIS_SINGLE`。
- 本機固有ガックン条件/発生率、設定変更時ボーナス高確の初期状態振り分けは再探索後もUNVERIFIED。

## No.1742 — LBトリプルクラウン
- path: `docs/real_machine_db/machines/2025-07-07_lb-triple-crown.md`
- manufacturer: **岡崎産業**
- formalModel: **LBTCSF4**
- inspectionCode: **4S1919**
- releaseDate: **2025-07-07**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.9 / 99.4 / 104.5 / 111.1%**
- BIG: **1/276.5 / 1/273.1 / 1/251.1 / 1/227.6**
- REG: **1/414.8 / 1/392.4 / 1/346.8 / 1/302.0**
- combined: **1/165.9 / 1/161.0 / 1/145.6 / 1/129.8**
- base: **約35G/50枚**
- basicPayout: **BB平均約312枚 / BB in BB平均約507枚 / RB約104枚**
- 天井: **非搭載**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1742 resetBehavior v0.7
- 天井非搭載のリアルボーナス+BT機のため、天井リセット/短縮、AT/CZ朝一モードはNOT_APPLICABLE。
- 必勝本の設定変更比較で設定変更時・電源OFF→ON時ともリールガックンは `現在調査中`。
- 設定変更/据え置き/純電断時のBT・成立済みボーナス等特殊途中状態の復帰契約は、正式型式・メーカー・BT・設定変更/据え置き/電源OFF ONで再探索後も直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
- 本機固有の有利区間契約も一般スマスロ仕様から推測せずUNVERIFIED。
- 2026-04-06後継 `LBトリプルクラウンセブン / LBTCSFG` のスペックが検索結果へ混入しやすい。2025年LBTCSF4の97.9〜111.1%・BIG 1/276.5〜1/227.6をcanonicalとして分離済み。

## 2025-07-07境界 — CLOSED 5/5 canonical
1. LBパチスロ ヱヴァンゲリヲン ～約束の扉～ — No.1738 DONE
2. わたしの幸せな結婚 — No.1739 DONE
3. アレックス ブライト — No.1740 DONE
4. ハイビリターン-30 — No.1741 DONE
5. LBトリプルクラウン — No.1742 DONE

boundaryAudit:
- 情報島の過去新台一覧が2025-07-07パチスロ5機を上記と一致掲載。
- 2025-07-22は確認新台がパチンコのみ、2025-07-28もパチスロ未確認。
- 2025-08-04は複数資料で6機一致。ここを次の全国導入本線とする。
- `L アズールレーン THE ANIMATION` は京楽直営店で2025-07-23フィールドテスト先行導入あり。canonical全国導入日は2025-08-04として、先行導入は注記扱い。

## 次回再開地点
- 最新mainを再同期しNo.1742と本handoffを確認。
- **No.1743候補「パチスロなめ猫～液晶ないけどなめんじゃねぇ～」— 2025-08-04** から開始する。
- 2025-08-04既知canonical群は以下6機:
  1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — NEXT
  2. マタドールIII — QUEUED
  3. パチスロ 転生したら剣でした — QUEUED
  4. L アズールレーン THE ANIMATION — QUEUED（7/23直営店フィールドテスト注記）
  5. L ダーリン・イン・ザ・フランキス — QUEUED
  6. L咲-Saki-頂上決戦 — QUEUED
- 6機処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。
- 各機種は性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1741〜1742を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1741 ハイビリターン-30
- パイオニア公式: https://www.slot-pioneer.co.jp/products/2025.html
- パイオニア公式プレスリリース: https://www.slot-pioneer.co.jp/release.html
- ゼンリン: https://zenrin-net.co.jp/11239/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0123/
- パチビー: https://www.pachibee.jp/machines/index/225060004
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4516/1/109064
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87103/
- 必勝本 モード移行抽選: https://hisshobon.com/machineinfo/87105/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/150/kh01.php
- パチマガスロマガ 内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/150/tj04.php
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/237206/
- スロパチクエスト: https://www.slopachi-quest.com/article/haibireturn-tenjou/

### No.1742 LBトリプルクラウン
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/31154/yugitsushin
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/31119/greenbelt
- パチビー発表会: https://www.pachibee.jp/pparticles/view/1329
- HAZUSE: https://hazuse.com/hd/4s1919/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4545/1/110082
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87455/
- 1geki: https://1geki.jp/slot/lb_triplecrown/61/
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/239184/
- 6確: https://www.kaku6.jp/slot/triplecrown/
- 岡崎産業後継機プレスリリース（別型式分離用）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

### 境界監査
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- 情報島 2025-08-04新台6機レビュー: https://p-johojima.jp/colum/post-12714/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 情報島 アズールレーン直営フィールドテスト: https://p-johojima.jp/new_machine/post-11099/
