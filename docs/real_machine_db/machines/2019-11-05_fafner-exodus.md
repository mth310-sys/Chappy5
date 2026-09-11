# パチスロ 蒼穹のファフナーEXODUS

recordNo: 1317
machineName: パチスロ 蒼穹のファフナーEXODUS
machineNameVariants: 蒼穹のファフナーEXODUS / 蒼穹のファフナー エグゾダス / ファフナーEXODUS / ファフナーEX / ファフナー2
manufacturer: SANKYO
formalModel: S蒼穹のファフナーEXODUS bA
certificationNumber: 8S1335
releaseDate: 2019-11-05
generation: 6号機
systemType: AT / 疑似ボーナス＋差枚数管理AT / V抽選役物

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.4% |
| 3 | 101.6% |
| 4 | 104.1% |
| 5 | 107.4% |
| 6 | 112.0% |

HAZUSE、ちょんぼりすた、スロットセブン、Pachinaviで一致。スロット解析.comのみ設定1を97.7%とするため、設定1のみ単一資料差をCONFLICTとして別記する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 蒼穹BONUS | Vバトル | AT「蒼穹作戦」 |
|---|---:|---:|---:|
| 1 | 1/223 | 1/904 | 1/589 |
| 2 | 1/220 | 1/884 | 1/562 |
| 3 | 1/212 | 1/859 | 1/512 |
| 4 | 1/208 | 1/775 | 1/453 |
| 5 | 1/203 | 1/724 | 1/391 |
| 6 | 1/197 | 1/643 | 1/315 |

SANKYO公式オンライン博物館で蒼穹BONUS / 蒼穹作戦の設定別確率を確認。Vバトルは複数解析値。

信頼度: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- canonical: **約49.9G/50枚**。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「蒼穹作戦」: **約2.7枚/G**。
- SANKYO公式オンライン博物館および2019年当時の業界試打記事で一致。
- AT中BIG BONUS: 公式紹介では **約3.1枚/G**。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「蒼穹作戦」: 差枚数管理型、**最低100枚保証**。初期差枚数は当選契機で変動。
- 通常時の蒼穹BONUS: **20G継続・純増約2.7枚/G**。
- AT中BIG BONUS: **30G継続・純増約3.1枚/G**。
- EXODUS LOOP: 純増約2.7枚/G、セット数上乗せ込み継続率約98%、初回50G→以後20G単位、最大500G相当の完走構造。

固定獲得枚数型ではないため、最低保証・継続G・純増を物差し値として保持する。

信頼度: OFFICIAL / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時555G消化で第一天井。上位CZ「フェストゥム強襲」へ突入。
- フェストゥム強襲のボーナス期待度は約87%。
- 第一天井CZ失敗後はEXODUSゾーンへ移行し、毎ゲーム約1/30でEXODUS LOOPを抽選。非当選でも777G到達でEXODUS LOOPへ強制突入。
- CZ失敗回数天井を搭載。有利区間移行時に1～10回でセットされ、最大10回失敗後にVバトルへ。
- 通常CZ「フェストゥム襲来」のボーナス期待度は約24%。
- 有利区間移行時は必ず高確スタート。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- **天井ゲーム数RESET**。
- **CZ失敗回数RESET**。
- **内部状態 / モードRESET**。
- **有利区間RESET、非有利区間から開始**。
- 液晶ステージは第1話（EP.1）から。
- 液晶ゲーム数は基本0G / 「000」表示（資料により前日の状態で表示無しとなる場合の注記あり）。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は **内部天井G、CZ失敗回数、内部状態 / モード、有利区間をCARRY_OVER**。
- 朝一液晶G数は0G表示へ戻るため、見た目のゲーム数と内部天井進行を混同しない。
- ステージは第1話から開始。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 純電源OFF→ONのみでは **天井G / CZ失敗回数 / 内部状態・モード / 有利区間をCARRY_OVER**。
- 液晶G数は0G、液晶ステージは第1話から開始。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: 内部天井Gを **RESET**。
- 据え置き / 純電断: 内部天井Gを **CARRY_OVER**。
- 液晶G数は設定変更の有無を問わず朝一0G系表示となるため、液晶ゲーム数だけでは判別できない。

### ceilingAfterReset

- 設定変更後も第一天井は **555G**。
- 555Gの上位CZ失敗後はEXODUSゾーンへ移行し、最大 **777G**でEXODUS LOOP。
- 設定変更専用のゲーム数天井短縮は確認できない。
- CZ失敗回数天井は設定変更で再セットされ、最大10回。

### modeAfterReset

- 設定変更: **RESET / 再セット**。
- 据え置き / 純電断: **CARRY_OVER**。
- 有利区間移行時のCZ失敗回数天井は1～10回で再セット。
- 朝一専用モードの公開契約は確認できない。

### stateAfterReset

- 設定変更: 内部状態RESET後、有利区間移行時は **高確スタート確定**。
- 据え置き / 純電断: 内部状態を引き継ぐ。
- 高確の通常時詳細移行率は実機完全再現用のため本DBでは収集対象外。

### advantageousSectionReset

- 設定変更: **RESET / 非有利区間開始**。
- 据え置き / 純電断: **CARRY_OVER**。
- 通常時は有利区間ランプ消灯タイプとする解析があり、朝一ランプ単独では設定変更判別に使えない。
- 有利区間移行契機はリプレイ以外の小役成立時。

### resetBenefits

- 設定変更後は有利区間移行時に **高確スタート確定**。
- 非有利区間から有利区間へ移行するゲームでレア小役成立時はAT / Vバトル抽選が優遇される。
- 公開解析値: 弱レア小役 **約30%**、強レア小役 **約80%**でAT or Vバトル抽選。これは「設定変更専用」ではなく有利区間移行時共通値として分離して保存。
- 高確スタート以外に明確な朝一専用短縮天井などは確認できない。

### resetPenalties

- 設定変更により前日の天井G、CZ失敗回数、内部状態 / モードを失う。
- 据え置きハマり・CZスルー蓄積を狙う客にとっては消失要素となる。

### resetDetection

- **前兆ゲーム数による判別は不可**。設定変更の有無にかかわらず、当日の液晶ゲーム数に合わせてゲーム数前兆が発生する。
- **液晶G数による判別は不可**。据え置きでも0G系表示。
- **有利区間ランプ単独判別は不可**。通常時消灯タイプ。
- ゾロ目以外かつレア役契機がないCZ当選は据え置き推測材料になり得るが、高確中は3枚役でもCZ抽選があるため確定判別にはしない。
- 本機固有のガックン発生条件・発生率は、機種名/正式型式/メーカー/シリーズ名と検索語を変えて再探索したが直接契約を固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更後の有利区間移行: **高確スタート確定**。
- 有利区間移行時AT or Vバトル抽選: 弱チェリー / スイカ / 弱チャンス目 **約30%**、強チェリー / 強チャンス目 / 同化チェリー **約80%**。
- CZ失敗回数天井: 設定変更後に再セット、**最大10回**。
- 第一ゲーム数天井: **555G**、天井CZ失敗後の第二救済: **777G**。
- 設定変更専用のモード振り分け / CZ失敗回数振り分け詳細: `PUBLIC_RESET_DISTRIBUTION_NOT_FIXED_AFTER_RESEARCH`。
- 本機固有ガックン率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

`蒼穹のファフナーEXODUS / 蒼穹のファフナー エグゾダス / ファフナーEXODUS / ファフナー2 / S蒼穹のファフナーEXODUS bA / 8S1335 / SANKYO` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / CZ失敗回数 / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ` を組み合わせ、SANKYO公式オンライン博物館、2019年業界試打記事、HAZUSE、1geki、ちょんぼりすた、おスロおパチおいでやす、期待値見える化、スロパチくえすと、スロットセブン、パチスロメソッドを横断。主要リセット契約は複数資料で一致。ガックンと設定変更専用の詳細振り分けは公開契約を固定できなかったため推測補完しない。

## qualityNotes / conflicts

- 全国導入日 **2019-11-05** はHAZUSE、ちょんぼりすた、1geki系、当時導入カレンダーで一致。SANKYOオンライン博物館は導入年月を2019.10と表示するため、メーカー側の「導入年月」と全国ホール導入開始日の定義差として保持し、canonicalは2019-11-05。
- 機械割設定1はHAZUSE/ちょんぼりすた/スロットセブン/Pachinaviが **97.9%**、スロット解析.comのみ **97.7%**。平均せず `CONFLICT_SETTING1_PAYOUT_97_9_VS_97_7_SINGLE_SOURCE` として保持し、複数一致の97.9%をcanonical。
- SANKYO公式オンライン博物館はAT純増約2.7枚/G、AT中BIG BONUS純増約3.1枚/Gを明記。通常時蒼穹BONUSは解析上20G・約2.7枚/G、AT中BIG BONUSは30G・約3.1枚/Gであり、名称と状態を混同しない。

## sources

取得日: 2026-09-11

1. SANKYOオンライン博物館 — パチスロ 蒼穹のファフナー EXODUS
   - https://www.sankyo-fever.jp/collection/897/
   - メーカー公式。販売名/型式 `S蒼穹のファフナー EXODUS bA`、2019.10表記、設定別蒼穹BONUS/蒼穹作戦、AT純増約2.7枚/G、AT中BIG BONUS約3.1枚/Gを確認
   - reliability: OFFICIAL
2. P-WORLD / アミューズメントジャパン — 6号機ファフナーと設定付き羽根モノ
   - https://news.p-world.co.jp/articles/11818/amusement
   - 2019-09-12プレス試打会、6号機、差枚数管理AT、純増約2.7枚/Gを確認
   - reliability: INDUSTRY
3. HAZUSE — パチスロ 蒼穹のファフナーEXODUS
   - https://hazuse.com/machine/pachislot/8S1335/
   - 型式 `S蒼穹のファフナーEXODUS bA`、検定番号 `8S1335`、2019-11-05、機械割、天井、設定変更/電断挙動を確認
   - reliability: ANALYSIS_HIGH
4. HAZUSE — AT/ART
   - https://hazuse.com/machine/pachislot/8S1335/genre/209/
   - 蒼穹BONUS20G、蒼穹作戦最低100枚、CZ/Vバトル、EXODUS LOOP、有利区間移行時抽選を確認
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — 蒼穹のファフナーEXODUS
   - https://chonborista.com/slot/sankyo-slot/92344/
   - 導入日、設定別初当たり/機械割、49.9G/50枚、純増2.7枚/G、天井、有利区間、朝一リセット表を照合
   - reliability: ANALYSIS_HIGH
6. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_fafner_ex/3/
   - 設定変更時の天井/有利区間/モードRESET、電源OFF→ONの引継ぎ、液晶初期表示を照合
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 — 朝一リセット挙動
   - https://slotjin.com/slot/fafnerexodus-reset/
   - 天井/CZスルー回数/内部状態/有利区間の設定変更対据え置き挙動、判別要素を照合
   - reliability: ANALYSIS_HIGH
8. スロットセブン — 天井・朝一
   - https://slot-seven.com/sokyunofafunaexodus-tenzyou/
   - 朝一リセット表、有利区間移行時高確、弱/強レア役30%/80%を照合
   - reliability: ANALYSIS_SINGLE
9. パチスロメソッド — リセット判別と恩恵
   - https://slotmethod.jp/archives/10321/
   - 通常時有利区間ランプ消灯、前兆判別不可、高確スタートを照合
   - reliability: ANALYSIS_SINGLE
10. スロット解析.com — 基本スペック
   - https://slotkaiseki.com/fafunaexodus_spec/
   - 2019-11-05、基本性能を照合。設定1機械割97.7%のみ主要資料群と競合
   - reliability: ANALYSIS_SINGLE
11. パチンコ・パチスロ新台導入日カレンダー2019
   - https://pachinkopachisro.com/archives/52807194.html
   - 2019-11-05導入群監査用
   - reliability: SECONDARY_CALENDAR
12. パチスロ立ち回り講座 — 新台導入予定日
   - https://crankyseven.com/newmachine-info.htm
   - 2019-11-05に北斗の拳天昇 / 蒼穹のファフナーEXODUS / サラリーマン金太郎MAXの3機種を確認
   - reliability: SECONDARY_CALENDAR
13. モゲスロ — 2019年新台スロット導入日カレンダー
   - https://moge-site.com/new-slot2019
   - 2019-11-05の3機種を再照合
   - reliability: SECONDARY_CALENDAR

## status

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
chronologyStatus: 2019_11_05_GROUP_MEMBER
