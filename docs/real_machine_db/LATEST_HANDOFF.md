更新日: 2026-09-13

## 現在地点
- recordCount: **1590**
- latestRecordAdded: **ファミスタ回胴版!! — No.1590**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-09-04_famista-kaidouban.md`
- chronologicalFrontier: **2023-09-04**
- frontierLatestMachine: **ファミスタ回胴版!! — No.1590**
- schema: **resetBehavior v0.7**
- status: **2023-09-04_GROUP_CLOSED_5_OF_5_CANONICAL_PROCESSED / NEXT_NO1591_CANDIDATE_L_MAHJONG_FIGHT_CLUB_KAKUSEI_2023-09-19 / THEN_SENGOKU_COLLECTION5_GOKURAKU_LOOP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1588 `L009 RE:CYBORG` を確認して開始。
- INDEXは旧表示（19件）のままなので、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- No.1589 `回胴式遊技機 グランベルム`、No.1590 `ファミスタ回胴版!!` を性能コア + resetBehavior v0.7で追加。
- 2023-09-04群は5機すべて処理済み。複数導入資料・個別機種の実導入日を再監査し、`L戦国乙女4 戦乱に閃く炯眼の軍師` / `パチスロ傷物語 -始マリノ刻-` / `L009 RE:CYBORG` / `回胴式遊技機 グランベルム` / `ファミスタ回胴版!!` の5機をcanonicalとして **CLOSED 5/5**。
- K-Navi月間カレンダーは傷物語を欠落して4機表示だが、サミー公式動画・一撃・K-Navi個別機種DB・複数解析で傷物語の2023-09-04導入を確認したため、一覧欠落として扱い群から除外しない。

## No.1589 — 回胴式遊技機 グランベルム
- path: `docs/real_machine_db/machines/2023-09-04_granbelm.md`
- manufacturer: **北電子（製造: ゼクロスクリエイティブ）**
- formalModel / inspectionCode: **SグランベルムZXZ / 330077**
- releaseDate: **2023-09-04**
- generation/system: **6.5号機 / メダルAT / 疑似ボーナス + セット継続AT**
- payoutRate 設定1～6: **97.6 / 98.5 / 100.7 / 104.5 / 107.6 / 110.9%**
- bonus: **1/287.9 / 1/283.1 / 1/268.8 / 1/247.7 / 1/233.7 / 1/223.8**
- AT: **1/478.9 / 1/466.6 / 1/436.0 / 1/393.8 / 1/367.5 / 1/346.1**
- base: **約34.2G/50枚**
- netIncrease: **約3.2枚/G**
- normal ceiling: A **649G+α** / B **349G+α** / C **199G+α** / D **99G+α**。
- reset: 設定変更で **有利区間 / 天井 / 通常モード / CZモード / 内部状態RESET**。満月の家開始。ブラッドムーン移行優遇。
- carry/pure power: 据え置き・純電断は **有利区間 / 天井 / 通常モード / CZモード / 内部状態CARRY_OVER**。液晶は0G表示、満月の家開始のため見た目だけでは判別困難。
- reset numeric: 初期CZモード **76.4 / 13.6 / 8.8 / 1.2%**、設定変更後初当たり **148G以内40.3% / 248G以内71.2% / 398G以内83.3%**。
- reset ceiling: 設定変更専用固定短縮天井 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 有利区間ランプ判別不可。本機固有ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- conflict: 後年整理資料の一部に設定変更時引継ぎとの誤記があるが、なな徹・一撃・複数朝一資料の設定変更RESET / 電断CARRY_OVER一致をcanonical採用。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- commit: **41b74719fea9ab96a3b3459e8eeaa7d12a3e5c07**

## No.1590 — ファミスタ回胴版!!
- path: `docs/real_machine_db/machines/2023-09-04_famista-kaidouban.md`
- manufacturer: **ユニバーサルブロス**
- formalModel / inspectionCode: **S/ファミスタ回胴版!!/FB / 2S1734**
- releaseDate: **2023-09-04**
- generation/system: **6.5号機 / メダル A+ART / 技術介入**
- settings: **1 / 2 / 5 / 6**
- market payout: **98.3 / 99.7 / 102.3 / 104.2%**
- full攻略 payout: **102.0 / 103.5 / 106.3 / 108.3%**
- BIG: **1/303.4 / 1/302.0 / 1/300.6 / 1/299.3**
- REG: **1/455.1 / 1/414.8 / 1/381.0 / 1/356.2**
- bonus合算: **1/182.0 / 1/174.8 / 1/168.0 / 1/162.6**
- base canonical: **約35.9G/50枚**。一部資料の32.9GはCONFLICT保持。
- netIncrease: ART **約0.3枚/G**
- basic: BIG最大 **202枚** / REG最大 **56枚**。
- ceiling: **非搭載**。
- reset: 設定変更で内部状態リセット。初期昼ステージ。
- pure power: 内部状態CARRY_OVER、昼ステージ。
- reset benefit: 設定変更専用短縮天井/朝一専用モード/固定初当たり優遇 **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: 設定変更/据え置き/純電断ごとの機種固有契約は **UNVERIFIED_AFTER_RESEARCH**。有利区間ランプ判別不可。
- gakkun: **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- commit: **d5f8a8d78aae90944df82efec1e92079223cd5a1**

## 2023-09-04群 — CLOSED 5/5 canonical
1. L戦国乙女4 戦乱に閃く炯眼の軍師 — No.1586 **DONE**
2. パチスロ傷物語 -始マリノ刻- — No.1587 **DONE**
3. L009 RE:CYBORG — No.1588 **DONE**
4. 回胴式遊技機 グランベルム — No.1589 **DONE**
5. ファミスタ回胴版!! — No.1590 **DONE**

### 群境界監査
- K-Navi 2023年9月カレンダー: 9/4スロットに009 / ファミスタ / 戦国乙女4 / グランベルムの4機を掲載。
- 傷物語は同カレンダー一覧から欠落するが、サミー公式が2023-09-04順次導入開始を明示し、K-Navi個別機種DBも9/4を明示。別導入一覧では5機すべて同日掲載。
- PB / 25Φ・30Φ派生 / 同日別型式 / 地域先行として独立追加すべき機種は今回の再監査で固定できず。
- よってcanonical 5機でCLOSED。ただし後続QAで新資料が見つかった場合は遡及追加可。

## 次回再開地点
1. **No.1591候補 `L麻雀格闘倶楽部 覚醒`（2023-09-19）**を最優先で処理。
2. 続いて **`L戦国コレクション5 超極楽LOOP`（2023-09-19）** を処理。
3. 現時点で9/19両機の実導入は個別資料で確認済み。群CLOSED前にPB/別型式/地域先行/延期・段階導入を再監査する。
4. 麻雀格闘倶楽部 覚醒の既知コア候補: 型式 `L麻雀格闘倶楽部覚醒KM`、AT **1/246.8→1/141.6**、出玉率 **97.5→110.0%**、純増約**8.0枚/G**、約**35.4G/50枚**、天井770G+α（最大960G）。次回はresetBehaviorを複数系統で詰めてから保存。
5. 戦国コレクション5超極楽LOOPの既知コア候補: 型式 `L戦国コレクション5GJ`、AT **1/346.8→1/287.1**、出玉率 **97.5→110.0%**、純増約**10枚/G**、約**32.3G/50枚**。設定変更時は有利区間/天井/内部状態/モードRESET、モードC+天国約**54%**、769コレ以上当選時の上位シナリオ選択が設定1約25%→設定6約43%。次回正式検定番号と純電断契約を詰める。

## 今回参照した主要ソース
取得日: 2026-09-13
- 和歌山県公安委員会 グランベルム検定公示: https://www.police.pref.wakayama.lg.jp/koan/kenteiyuugiki/R5/kenteikokuji0516.pdf
- P-WORLD グランベルム: https://www.p-world.co.jp/machine/database/9881
- HAZUSE グランベルム: https://hazuse.com/machine/pachislot/3S0077/
- なな徹 グランベルム朝一: https://nana-press.com/kaiseki/machine/587/16597/
- なな徹 グランベルムCZモード: https://nana-press.com/kaiseki/machine/587/16615/
- 一撃 グランベルム朝一: https://1geki.jp/slot/s_granbelm/3/
- 一撃 グランベルムCZモード: https://1geki.jp/slot/s_granbelm/41/
- 遊技日本 ファミスタ: https://news.p-world.co.jp/articles/25035/nippon
- P-WORLD ファミスタ: https://www.p-world.co.jp/machine/database/9866
- なな徹 ファミスタスペック: https://nana-press.com/kaiseki/machine/598/15703/
- なな徹 ファミスタ朝一: https://nana-press.com/kaiseki/machine/598/16434/
- ちょんぼりすた ファミスタ: https://chonborista.com/slot/universal-slot/191482/
- サミー公式 傷物語導入告知: https://www.youtube.com/watch?v=JWlPQy72qDA
- K-Navi 2023年9月導入カレンダー: https://p-kn.com/calendar/202309/
- 9/4導入一覧（5機掲載）: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/9%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 遊技日本 麻雀格闘倶楽部 覚醒: https://news.p-world.co.jp/articles/25092/nippon
- 遊技日本 戦国コレクション5超極楽LOOP: https://news.p-world.co.jp/articles/25093/nippon
- なな徹 戦国コレクション5超極楽LOOP朝一: https://nana-press.com/kaiseki/machine/614/16788/

## リレー継続ルール
- 最新mainを再取得し、README → ミッションv0.7 → INDEX → LATEST_HANDOFF → No.1590レコードの順で確認する。
- mainがこのhandoffより進んでいた場合は必ずmain側を優先し、既処理機種を重複登録しない。
- 欠損は検索語・資料系統を変えて再探索してからUNVERIFIED判定。
- 競合値は平均せずCONFLICTを保持。
- 実機完全再現用の細かな内部抽選へ過剰に掘らず、物差し性能コア + ホール経営/朝一客AIに必要なresetBehavior粒度を維持する。
