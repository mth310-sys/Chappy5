更新日: 2026-09-11

## 現在地点
- recordCount: **1354**
- latestRecordAdded: **パチスロ ダイナマイトキング極 — No.1354**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-05-11_dynamite-king-kiwami.md`
- chronologicalFrontier: **2020-05-11**
- frontierLatestMachine: **パチスロ ダイナマイトキング極 — No.1354**
- schema: **resetBehavior v0.7**
- status: **2020-05-11_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1351を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 並行進捗でNo.1351「サンダーVライトニング」まで完了済みであることを確認し、重複せず2020-05-11群から再開。
- No.1352 **パチスロ モンキーターンIV**、No.1353 **Sヤッターマン絶対正義**、No.1354 **パチスロ ダイナマイトキング極** を追加。
- 3機とも性能コアとresetBehavior v0.7を、表記揺れ・正式型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/有利区間を組み替えて再探索し保存。
- 2020-05-11群は当時導入カレンダー・各機種資料を横断し、**モンキーターンIV / ヤッターマン絶対正義 / ダイナマイトキング極** の3機を処理済み。追加の同日実導入パチスロを確認できず、群をCLOSED。
- 遡及resetBehavior QAは今回進めず、前回handoffの次候補 `2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）を維持。

## No.1352 — パチスロ モンキーターンIV
- path: `docs/real_machine_db/machines/2020-05-11_monkey-turn-iv.md`
- manufacturer: **山佐**
- formalModel: **Sモンキーターン4ZDD**
- certificationNumber: **9S1729**
- releaseDate: **2020-05-11**
- generation/system: **6号機 / AT / 規定ゲーム数・シナリオ管理**
- payoutRate: **98.4 / 99.6 / 101.0 / 104.1 / 107.1 / 110.3%**
- AT初当り: **1/381.7 / 318.8 / 315.8 / 239.2 / 210.7 / 160.4**
- base: **約40G/50枚**
- netIncrease: **約2.7枚/G**
- SG RUSH: **1セット40G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1352
- 設定変更: 天井内部G RESET / 有利区間RESET / 非有利区間開始。
- 据え置き・純電断: 天井内部G / 有利区間 CARRY_OVER。
- 有利区間移行時に通常A / 通常B / 引き戻し / 天国を再抽選。
- **リセット時の天国移行率は全設定共通25%**。天国なら100G以内AT。
- リセット専用の一律短縮天井はなし。モード別最大天井は通常A 1000G / 通常B 600G / 引き戻し 300G / 天国 100G。
- 通常時から有利区間ランプ点灯型。朝一点灯=据え置き濃厚 / 消灯=設定変更濃厚。ただし前日条件等の例外があるため確定扱いにしない。
- 本機固有ガックン契約は十分再探索後もPUBLIC_VALUE_NOT_FIXED。

## No.1353 — Sヤッターマン絶対正義
- path: `docs/real_machine_db/machines/2020-05-11_yatterman-zettai-seigi.md`
- manufacturer: **サンスリー（SANYO系）**
- formalModel: **Sヤッターマン絶対正義SE**
- certificationNumber: **9S1859**
- releaseDate canonical: **2020-05-11**
- generation/system: **6号機 / AT / CZ・ポイント管理 / 差枚数管理AT**
- payoutRate: **97.4 / 98.5 / 100.2 / 102.8 / 106.0 / 110.0%**
- YC初当り: **1/335.7 / 322.3 / 308.3 / 286.2 / 239.0 / 164.2**
- RUSH初当り: **1/960.6 / 909.5 / 874.5 / 790.1 / 621.1 / 436.0**
- base: **CONFLICT 50.0G/50枚 vs 51.5G/50枚**
- netIncrease: **約2.8枚/G**
- YC: **30G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_CONFLICT**

### resetBehavior v0.7 — No.1353
- 設定変更: 有利区間 / ゲーム数天井 / カウンターpt / カウンター高確 RESET。
- 据え置き・純電断: 同項目 CARRY_OVER。
- 純電断時は朝一のカウンター表示が0に見えても、**1G目レバーONで前日のptへ復帰**。
- 有利区間移行時は高確スタート確定。
- 非有利区間中の強チェリー / チャンス目は全設定共通 **12.5%でYC直撃抽選**。
- 設定変更専用短縮天井は確認なし。通常ゲーム数天井799G。
- 有利区間ランプ判別は資料CONFLICT。通常時消灯型で判別不可とする複数詳細解析をcanonicalにし、朝一消灯=変更濃厚とする単一資料をCONFLICTとして保持。
- releaseDateもパチ7 2020-05-07 vs 複数資料2020-05-11の差を保持し、canonicalは5/11。

## No.1354 — パチスロ ダイナマイトキング極
- path: `docs/real_machine_db/machines/2020-05-11_dynamite-king-kiwami.md`
- manufacturer: **D-light（ディ・ライト / Daiichi系）**
- formalModel: **Sパチスロダイナマイトキング極JJT**
- certificationNumber: **9S1214**
- releaseDate: **2020-05-11**
- generation/system: **6号機 / AT / ゲーム数・GO回数管理 / 高純増AT**
- payoutRate: **97.5 / 99.1 / 101.3 / 104.9 / 108.2 / 110.1%**
- CD7初当り: **1/271.5 / 264.7 / 253.3 / 242.7 / 233.6 / 177.3**
- ダイナマイトタイム初当り: **1/759.3 / 711.0 / 647.5 / 579.5 / 518.2 / 370.3**
- base: **約53G/50枚**
- netIncrease: **約6.7枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_SHORTENED_CEILING**

### resetBehavior v0.7 — No.1354
- 設定変更: ゲーム数天井 / GO回数天井 / 内部状態 RESET。
- 据え置き・純電断: 同項目 CARRY_OVER。
- 通常ゲーム数天井 **777G+α** → 設定変更後 **666G+α**へ短縮。
- GO回数天井は有利区間移行時に規定回数抽選。公開精密値: 20〜30回 17.97% / 40〜50回 15.63% / 60〜70回 17.19% / 80〜90回 2.34% / 100回以上 46.88%。
- 本機固有の有利区間ランプ設定変更判別、ガックン、設定変更専用モード振り分けは、表記揺れ・型式・メーカー・当時解析・旧DBを横断しても直接契約を固定できず、一般的6号機仕様から補完せずUNVERIFIED_AFTER_RESEARCH。

## 2020-05-11群監査
1. パチスロ モンキーターンIV — **No.1352 / 処理済み**
2. Sヤッターマン絶対正義 — **No.1353 / 処理済み**
3. パチスロ ダイナマイトキング極 — **No.1354 / 処理済み**
- 当時2020年新台導入日カレンダーでも5/11群として上記3機を確認。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 既存性能コアをやり直さず、resetBehaviorのみv0.7基準で順次補完する。

## 次回本線の再開地点
- 2020-05-11群はCLOSED。
- **2020-05-12〜05-17境界を再監査**して漏れがないことを確認後、**2020-05-18群**へ進む。
- 現時点で確認済みの5/18候補:
  1. **ハイドラ-30**
  2. **ビッグシオ-30**
  3. **沖ドキ！2-30**
  4. **SOZ1-01**
- 最新main再同期後、5/18群を全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査し、実導入順/群内順を確定して最初の未処理候補を **No.1355** とする。

## 主要出典 — 取得日 2026-09-11
### No.1352 パチスロ モンキーターンIV
- HAZUSE: https://hazuse.com/machine/pachislot/9S1729/
- 1geki 機種TOP: https://1geki.jp/slot/s_mkt4/
- 1geki ベース: https://1geki.jp/slot/s_mkt4/4/
- 1geki 天井: https://1geki.jp/slot/s_mkt4/3/
- 1geki リセット100回検証: https://1geki.jp/slot/s_mkt4/92/
- 1geki 勝負駆けポイント: https://1geki.jp/slot/s_mkt4/42/
- スロットセブン 朝一: https://slot-seven.com/monkeyturn4-tenzyou/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/monkeyturn4/
- なな徹 モード: https://nana-press.com/kaiseki/machine/46/793/
- SLOT HACK: https://slothack.net/matome/7573/
- K-Navi: https://p-kn.com/slot/3420/

### No.1353 Sヤッターマン絶対正義
- 遊技通信 検定: https://www.yugitsushin.jp/news/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%883%E6%9C%8830%E6%97%A5%EF%BC%89-2/
- K-Navi: https://p-kn.com/kishu/3429/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/41/739/
- なな徹 朝イチ: https://nana-press.com/kaiseki/machine/41/743/
- パチ7: https://pachiseven.jp/machines/6034
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/106874/
- スロパチクエスト 設定差: https://www.slopachi-quest.com/article/yatterman-justice-settei/
- スロパチクエスト 天井: https://www.slopachi-quest.com/article/yatta-mann-zettaiseigi-tennjyou/
- P-WORLD: https://www.p-world.co.jp/machine/database/9174
- イチカツ: https://ichikatsu.com/yattermanseigi/

### No.1354 パチスロ ダイナマイトキング極
- HAZUSE: https://hazuse.com/machine/pachislot/9S1214/
- ちょんぼりすた: https://chonborista.com/slot/d-light/107131/
- SLOT HACK 天井: https://slothack.net/matome/7625/
- SLOT HACK 設定差: https://slothack.net/matome/6958/
- スロパチクエスト 天井/朝一: https://www.slopachi-quest.com/article/dynamiteking-kiwami-tennjou/
- なな徹 天井: https://nana-press.com/kaiseki/machine/38/673/
- 1geki ダイナマイトタイム: https://1geki.jp/slot/s_dking/63/
- 1geki カウントダウンセブン: https://1geki.jp/slot/s_dking/62/

### 2020-05-11群監査
- パチンコ・パチスロ.com 新台導入日カレンダー2020: https://pachinkopachisro.com/archives/53951811.html
