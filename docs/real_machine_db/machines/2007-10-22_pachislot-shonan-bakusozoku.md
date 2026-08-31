# パチスロ湘南爆走族

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: パチスロ湘南爆走族
formalModel: パチスロ湘南爆走族V2
manufacturer: 大一商会（Daiichi）
releaseDate: 2007-10-22（発売）
generation: 5号機初期
systemType: ボーナス + CZ/RT / 50G RT「爆走モード」

## releaseDate evidence

- 当時のパチスロ業界史更新記録で「パチスロ湘南爆走族［大一商会］ ※2007/10/22発売」と明記。
- 5号機クロニクルも2007/10導入として整理。
- P-WORLDで型式名 `パチスロ湘南爆走族V2` を確認。

信頼度: CONTEMPORARY_INDUSTRY_HISTORY / SECONDARY_DB

## payoutRateBySetting

5号機クロニクル:
- 設定1: 96.1%
- 設定2: 98.8%
- 設定5: 105.0%
- 設定6: 117.1%

当時のパチスロ業界史更新記録では高機械割一覧に `パチスロ湘南爆走族 115.0%（とりあえず発表値）` と記録されている。
後年のパチ7調査では最高出玉率117.1%と掲載。

このため最高設定の出玉率は `115.0%（当時発表値）` と `117.1%（後年DB/調査値）` を平均せず `CONFLICT` として保持する。

信頼度: SECONDARY_DB / CONTEMPORARY_HISTORY / CONFLICT

## initialHitBySetting

- K-Navi現存ページではBIG/REG/機械割が「未発表」と表示され、設定別ボーナス確率の数値本文を取得できない。
- `パチスロ湘南爆走族 / 湘南爆走族V2 / Daiichi / 大一 / BIG / REG / ボーナス確率 / 設定1 / 設定6 / 1/` を組み替え、当時解析サイト、旧DB、後年回顧を再探索したが、今回設定別BIG/REG確率を安定して照合できる数値表を確定できなかった。
- 後継・別機種「湘南純愛組」の数値は流用しない。

status: UNVERIFIED_AFTER_RESEARCH

## baseGamesPer50

- `50枚 / 1000円 / コイン持ち / ベース` を機種名・型式・メーカーと組み替え、当時解析/旧DB/中古実機資料/回顧資料まで再探索したが、比較可能な設定別または代表値を確定できなかった。

status: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- RT「爆走モード」: 50G 1セット。
- 純増: 約 +0.5枚/G。
- K-Navi、A-SLOT/ホームスロット系の旧機種説明で一致。
- 爆走モードには連続性があると説明されている。

信頼度: ANALYSIS_HIGH / RETROSPECTIVE_MACHINE_DB

## basicPayout

- BIG: 400枚超払い出し終了。旧機種説明では獲得約310枚。
- REG: 8回入賞または12Gで終了。旧機種説明では獲得約70枚。
- P-WORLD/K-Navi/中古実機DBでボーナス構成を照合。

信頼度: DATABASE / ANALYSIS_HIGH

## modeSpecificMinimumData

- CZ/RTを用いたRT機。
- RT「爆走モード」: 50G、約+0.5枚/G。
- 通常時は複数ステージを移行し、「ブッこみゾーン」はRT期待度に関係するステージ/ゾーンとして当時・後年資料に残る。
- 当時パチスロ業界史の「5号機・天井存在機種一覧」で、本機は **CZ突入系** に分類されている。
- したがって通常時ゲーム数に関わる救済/CZ到達機構の存在自体は `CONFIRMED_AT_CATEGORY_LEVEL` とするが、今回の現存資料では具体的な天井G数・CZ突入条件の数値本文を確定できていない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `パチスロ湘南爆走族 / 湘南爆走族V2 / Daiichi / 大一商会 / ブッこみゾーン / 爆走モード` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 変更判別` を組み替え、公式旧ページ、P-WORLD、K-Navi、当時業界史、旧解析/DB、回顧資料を横断。
- 設定変更時にCZ天井ゲーム数をリセット/短縮するか、専用モードへ移行するかを直接示す本機固有資料は `UNVERIFIED`。

carryOverBehavior:
- 当時資料からCZ突入系天井の存在は確認できるが、据え置き時の天井ゲーム数引継ぎを直接示す資料は `UNVERIFIED`。
- RT「爆走モード」中の据え置き/設定変更時に残G・RT状態がどう扱われるかも `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみでCZ天井ゲーム数、RT状態、ステージ/内部状態が維持・初期化されるかを示す直接資料は `UNVERIFIED`。

gameCounterReset:
- 通常時に `CZ突入系天井あり` は当時資料で確認。
- 具体天井G数、および設定変更/電断時のゲーム数処理は `UNVERIFIED`。

ceilingAfterReset:
- リセット後の短縮天井/専用天井: `UNVERIFIED`。

modeAfterReset:
- 設定変更専用モード / 朝一専用モード: `NONE_CONFIRMED`。
- ただしCZ天井処理が未確定のため「完全に変化なし」とは断定しない。

stateAfterReset:
- CZ/RT関連状態の設定変更時再抽選・初期化: `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一専用RT、公開されたリセット恩恵率、短縮天井数値: `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の公開不利要素: `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、初期出目、液晶ステージ、ランプ等による変更判別は再探索後も直接資料を確定できず `UNVERIFIED`。

numericResetData:
- 公開朝一数値 / リセット時CZ天井G / モード振り分け / RT状態移行率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007/10/22発売、当時発表値として最高機械割115.0%、CZ突入系天井搭載機一覧への収録を確認。
   - reliability: CONTEMPORARY_INDUSTRY_HISTORY
2. P-WORLD — パチスロ湘南爆走族
   - https://www.p-world.co.jp/machine/database/4933
   - 型式名 `パチスロ湘南爆走族V2`、BIG 400枚超払い出し、REG規定を確認。
   - reliability: DATABASE
3. K-Navi — パチスロ湘南爆走族
   - https://p-kn.com/slot/656/
   - Daiichi、RT「爆走モード」約+0.5枚/G、ボーナス規定。設定別BIG/REG/機械割は現存表示で未発表。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — Daiichi 5号機全機種一覧
   - https://5goki.com/daiichi
   - 2007/10。設定1/2/5/6の機械割96.1/98.8/105.0/117.1%。
   - reliability: SECONDARY_DB
5. パチ7 — 5号機歴代ハイスペック機調査
   - https://pachiseven.jp/articles/detail/14268
   - 湘南爆走族の最高出玉率117.1%を掲載。
   - reliability: RETROSPECTIVE_INDUSTRY_MEDIA
6. A-SLOT — 大一 パチスロ湘南爆走族 中古実機説明
   - https://www.a-slot.com/SHOP/daiichi1.html
   - 爆走モード50G 1セット、約+0.5枚/G、BIG約310枚、REG約70枚。
   - reliability: RETROSPECTIVE_MACHINE_DB
7. Daiichi旧公式ページ（現存旧URL）
   - https://daiichi777.jp/pachislot/szok/index.html
   - メーカー旧機種ページの存在を確認（現行取得では文字コード崩れがあり、数値根拠には使用しない）。
   - reliability: OFFICIAL_EXISTENCE_ONLY

## missingFields

- 設定別BIG/REG確率
- 50枚/1000円あたり通常時ベース
- CZ突入系天井の具体G数/発動条件
- 設定変更・据え置き・電源OFF→ON時のCZ天井ゲーム数/RT残G/状態処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 最高設定の機械割: 当時業界史に `115.0%（とりあえず発表値）`、後年5号機クロニクル/パチ7に `117.1%`。平均せず `CONFLICT` として双方保持。

## notes

- 191件目「元祖ハネスロ」後の2007-10-22同日群を監査し、main未登録を確認して追加。
- 「湘南純愛組」など後年の別機種仕様は混入させていない。
- 性能コアは機械割・RT性能・基本獲得を回収したが、設定別ボーナス確率とベースが未確定のため `PARTIAL`。
- resetBehaviorは、天井存在自体を見落とさず `CZ突入系天井あり` まで回収した一方、朝一の具体処理が未確定のため `PARTIAL`。
