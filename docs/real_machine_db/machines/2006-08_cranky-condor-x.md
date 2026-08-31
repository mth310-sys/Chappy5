# クランキーコンドルX

machineName: クランキーコンドルX
manufacturer: エレコ
generation: 5号機初期
releaseDate: 2006-08
systemType: Aタイプ + 完走型RT / 技術介入
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.1% |
| 4 | 101.2% |
| 6 | 104.7% |

信頼度: ANALYSIS_SINGLE

別二次資料で98.8 / 101.9 / 106.7%の値があるためCONFLICT保持。

## initialHitBySetting

設定別BIG/REG確率: UNVERIFIED

## baseGamesPer50

パチマガスロマガ（KKK使用時）:
- 設定1: 33.65G/1000円
- 設定4: 34.06G/1000円
- 設定6: 34.51G/1000円

信頼度: ANALYSIS_HIGH

## netIncrease

RT純増/G: UNVERIFIED

## basicPayout

- BIG: 約410枚とする二次資料あり。
- REG相当（MB/CT系）: 約104枚とする二次資料あり。

数値は二次資料値。別説明ではBIG約350枚との記載もあり、定義/攻略手順差の可能性を含めCONFLICT扱い。

## modeSpecificMinimumData

- 設定1/4/6の3段階。
- 通常時から突入する100Gの「クランキーチャレンジ」系RTを搭載。
- RT契機役出現率は全設定共通1/655.36とする複数資料あり。
- RT中にボーナス成立しても規定ゲーム終了まで継続する完走型RTとして後年の専門記事で確認。
- 技術介入性が高く、REG相当中は目押し手順が出玉へ影響。

## resetBehavior

### settingChangeBehavior

`クランキーコンドルX / クランキーコンドルX5 / エレコ / アルゼ` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / RT / クランキーチャレンジ / ガックン` を組み替え、メーカー公式、2006年当時業界記事、当時攻略資料、後年専門回顧、旧DBを横断したが、設定変更時の本機固有RT状態・RT残G・初期出目処理を直接明記した資料は確定できず `UNVERIFIED`。

### carryOverBehavior

- 据え置き時の進行中100G完走型RTの残G、ボーナス成立済み状態等の本機固有引継ぎ: `UNVERIFIED`。

### powerCycleBehavior

- 電源OFF→ONのみ時の進行中RT残G/内部RT状態/成立済みボーナスの本機固有処理: `UNVERIFIED`。

### gameCounterReset

- 通常時ゲーム数天井としてのカウンタは今回確認できず `NONE_CONFIRMED`。
- 100Gは通常時天井ではなく、クランキーチャレンジ系の完走型RT継続G数として区別。

### ceilingAfterReset

- 設定変更専用の短縮天井/短縮RT到達G数: `NONE_CONFIRMED`。
- 通常時ゲーム数天井自体も `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時専用モード振り分け: `NONE_CONFIRMED`。

### stateAfterReset

- 設定変更/据え置き/電断時の完走型RT状態・残G処理: `UNVERIFIED`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期。有利区間制度前）。

### resetBenefits

- 設定変更/朝一専用の確定恩恵・公開数値: `NONE_CONFIRMED`。

### resetPenalties

- 設定変更時固有の公開された不利要素: `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ、RT挙動による設定変更・据え置き判別を直接裏付ける資料は今回確定できず `UNVERIFIED`。
- 同社他機種や後継クランキー系の挙動は流用しない。

### numericResetData

- 設定変更時のみ適用される公開G数、モード振り分け、朝一当選率、恩恵発生率: `NONE_CONFIRMED`。
- 参考として通常ゲーム中のクランキーチャレンジ契機は約1/200とメーカー公式が説明する一方、既存解析では突リプ役1/655.36を確認している。これはリセット専用数値ではないためnumericResetDataには採用しない。

## sources

取得日: 2026-09-01

1. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 導入2006年8月、設定1/4/6機械割98.1/101.2/104.7%、BIG約410枚/REG約104枚。
   - reliability: ANALYSIS_SINGLE
2. パチマガスロマガ — クランキーコンドルX 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/64/c.php
   - 1000円あたり33.65/34.06/34.51G、突リプ役1/655.36。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — クランキーコンドルX 総合ページ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/64/eleco_slot_64.php
   - 基本システム/ボーナス確率/PAYOUT等の当時攻略資料入口。
   - reliability: ANALYSIS_HIGH
4. パチ7 — 生誕25周年記念『クランキー』の歴史
   - https://pachiseven.jp/articles/detail/11508
   - 2006年8月、クランキーチャレンジ1/655.36、REG相当の技術介入性を補助確認。
   - reliability: ANALYSIS_HIGH
5. パチ7 — 5号機まとめ#02
   - https://pachiseven.jp/articles/detail/14435%26title%3Dpachiseven.jp
   - RT中にボーナス成立しても規定ゲーム終了まで継続する完走型RTの仕組みを確認。
   - reliability: ANALYSIS_HIGH
6. marimo0925.net — クランキーシリーズ機械割ランキング
   - https://www.marimo0925.net/pachislot-clanky-kikaiwai-ranking/
   - 機械割98.8/101.9/106.7%。5号機、BIG/CT、通常時から100G RT。
   - reliability: ANALYSIS_SINGLE
7. ユニバーサルエンターテインメント公式 — クランキーコンドルX
   - https://www.universal-777.com/product/slot/cranky_condor_x/
   - エレコ、5号機、ボーナス+RT、2006年8月発売。通常ゲーム中約1/200でクランキーチャレンジ発生との公式説明。
   - reliability: OFFICIAL
8. K-Navi — 「クランキーコンドルX」の登場
   - https://p-kn.com/topics/news/11/
   - 2006-07-26当時記事。赤7/青7BIGとクランキーチャンス、通常プレイ中に突然突入するRTを確認。
   - reliability: INDUSTRY

## missingFields

性能コア:
- 設定別BIG確率
- 設定別REG/CT確率
- 設定別ボーナス合算
- RT純増/G
- 通常時機械割と完全攻略時機械割の明確な同一資料表

resetBehavior QA:
- 設定変更時のRT状態/残G処理
- 据え置き時のRT状態/残G引継ぎ
- 電源OFF→ONのみ時のRT状態/残G引継ぎ
- 本機固有の変更判別（ガックン/初期出目等）

## conflicts

- 設定別機械割: 5号機クロニクル 98.1/101.2/104.7% と別二次資料 98.8/101.9/106.7% が競合。平均化しない。
- BIG獲得枚数: 約410枚と約350枚の記述差あり。技術介入/純増定義差の可能性があるため未統合。
