更新日: 2026-09-12

## 現在地点
- recordCount: **1459**
- latestRecordAdded: **バーサスリヴァイズ — No.1459**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-11_versus-revise.md`
- chronologicalFrontier: **2022-01-11**
- frontierLatestMachine: **バーサスリヴァイズ — No.1459**
- schema: **resetBehavior v0.7**
- status: **2022-01-11_GROUP_OPEN_1_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1458「パチスロ リング 運命の秒刻」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 直前handoff指定の **2021-12-21〜2022-01-10境界監査**を実施。一撃の2021年12月新台カレンダーではスロット最終導入群が12/20で、2022年側の複数カレンダーでは次の主要新台群が1/11。年末年始境界に本線へ追加すべき新規パチスロは今回確認できず、2022-01-11へ前進。
- 2022-01-11群は複数資料で現時点 **3タイトル**を確認：
  1. バーサスリヴァイズ — No.1459 / DONE
  2. スーパーリノSP — NEXT
  3. 鬼浜爆走紅蓮隊 激闘謳歌編 — PENDING
- 鬼浜はベルコ公式で「2022年1月登場」、当時解析・導入カレンダーで2022-01-11が一致するため、日付差疑義は実質解消。ただし登録時に型式/検定番号まで再固定する。

## No.1459 — バーサスリヴァイズ
- path: `docs/real_machine_db/machines/2022-01-11_versus-revise.md`
- manufacturer: **エレコ**
- formalModel: **S／バーサスリヴァイズ／HS**
- certificationNumber: **1S1163**
- releaseDate: **2022-01-11**
- generation/system: **6.2号機 / A+RT / リアルボーナス / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRateMarketForecast: **99.3 / 101.1 / 103.5 / 105.8%**
- payoutRateFullStrategy: **102.0 / 104.0 / 106.5 / 109.0%**
- BB: **1/292.6 → 1/264.3**
- RB: **1/374.5 → 1/292.6**
- bonusCombined: **1/164.3 → 1/138.8**
- baseGamesPer50: **約43G（設定1目安）**
- netIncrease: **VS CHANCE約0.3枚/G / VS GAME約0.6枚/G**
- basicPayout: **BIG最大222枚 / REG最大112枚**
- normalCeiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_LIMITED_DIRECT_RESET_SOURCES**

### resetBehavior v0.7 — No.1459
- **設定変更**: 天井非搭載、通常時AT/CZモード非搭載のため、ゲーム数天井・短縮天井・朝一モード優遇はNOT_APPLICABLE。
- **据え置き/純電断**: 同じく天井/モード上の朝一差はNOT_APPLICABLE。
- **有利区間**: A+RT通常運用で朝一狙いへ使う有利区間リセット差はNOT_APPLICABLEとして扱う。
- **変更判別**: 二次解析で設定変更・純電源OFF→ONとも朝一1G目ガックンなし。ユニメモも双方残るため、設定変更判別は実質困難。
- **朝一恩恵/不利**: 設定変更専用の主要恩恵・不利要素、公開朝一数値は確認できず。
- **未固定**: 設定変更/据え置き/純電断時の成立済みボーナス状態・RT内部状態の厳密な保持/初期化契約。メーカー一次資料でのガックン非発生仕様。

## 2021-12-20群 — CLOSED / 6独立レコード
1. パチスロ戦姫絶唱シンフォギア 勇気の歌 — No.1453
2. 沖ドキ！DUO — No.1454
3. 沖ドキ！DUO-30 — No.1455
4. シンデレラブレイド4 — No.1456
5. 秘宝伝 解き放たれた女神 — No.1457
6. パチスロ リング 運命の秒刻 — No.1458

## 2022-01-11群 — OPEN
1. **バーサスリヴァイズ — No.1459 / DONE**
2. **スーパーリノSP — No.1460候補 / NEXT**
3. **鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461候補 / PENDING**

## 次回本線の再開地点
- **「スーパーリノSP」＝No.1460候補**から開始。
- 型式候補 `SリノSPYTMM`、2022-01-11導入、山佐ネクストは業界記事・K-Navi・複数解析で既確認。
- 性能コアに加え、ボーナス間1831G+α天井、中段トマト高確、設定変更/据え置き/純電断時の天井・トマト状態・内部状態、朝一変更判別、公開リセット数値を重点確認する。
- その後 **鬼浜爆走紅蓮隊 激闘謳歌編** を処理し、1/11群を別型式/PB/地域先行/延期・段階導入までクロス監査してCLOSED可否を判定。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-01_marine-gang.md`（マリーンギャング）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）**。
- 今回は本線前進を優先し、retro QAカーソルは進めていない。

## GitHub保存
- No.1459追加 commit: `a99520b429d32cab6b3a044c630305df61cb4a37`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1459 バーサスリヴァイズ
- https://news.p-world.co.jp/articles/18423/nippon
- https://news.p-world.co.jp/articles/19118/nippon
- https://www.pachibee.jp/machines/index/221110007
- https://hazuse.com/machine/pachislot/1S1163/genre/201/
- https://hazuse.com/machine/pachislot/1S1163/genre/203/
- https://hazuse.com/machine/pachislot/1S1163/genre/208/
- https://chonborista.com/slot/universal-slot/155031/
- https://www.nankaikoya.jp/versus-rexse-settei/

### 境界 / 2022-01-11群クロス監査
- https://1geki.jp/newmachinecalender/202112/
- https://ichikatsu.com/newslot2022/
- https://p-kn.com/slot/3677/
- https://news.p-world.co.jp/articles/19072/nippon
- https://www.s-bellco.co.jp/products/slot/onihama-geki/
- https://chonborista.com/slot/belko-slot/154177/
